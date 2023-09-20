import {
	Injectable,
	Inject,
	NotFoundException,
	InternalServerErrorException,
	ConflictException,
} from '@nestjs/common'
import { ITopicsRepository, ITopicsService, Topic } from 'domain/topics'
import { ResponseModel } from 'domain/responseModel'

@Injectable()
export class TopicsService implements ITopicsService {
	constructor(
		@Inject('ITopicsRepository')
		private readonly topicsRepository: ITopicsRepository
	) {}
	async getAll(): Promise<ResponseModel<Topic[]>> {
		try {
			const topics = await this.topicsRepository.getAll()
			return {
				code: 200,
				message: 'Topics found',
				data: topics,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Gettting Topics',
				data: error,
			})
		}
	}
	async getById(id: number): Promise<ResponseModel<Topic>> {
		try {
			const topic = await this.topicsRepository.getById(id)
			if (topic == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Topic not found',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Topic found',
				data: topic,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Gettting Topic',
				data: error,
			})
		}
	}
	async create(topic: Topic): Promise<ResponseModel<Topic>> {
		try {
			const topicCreated = await this.topicsRepository.create(topic)
			if (topicCreated == null) {
				throw new ConflictException({
					code: 409,
					message: 'Topic already exists',
					data: null,
				})
			}
			return {
				code: 201,
				message: 'Topic created',
				data: topicCreated,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Creating Topic',
				data: error,
			})
		}
	}
	async update(topic: Topic): Promise<ResponseModel<Topic>> {
		try {
			const topicUpdated = await this.topicsRepository.update(topic)
			if (topicUpdated == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Topic not found',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Topic updated',
				data: topicUpdated,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Updating Topic',
				data: error,
			})
		}
	}
	async delete(id: number): Promise<ResponseModel<{ deleted: boolean }>> {
		try {
			const topicDeleted = await this.topicsRepository.delete(id)
			if (topicDeleted == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Topic not found',
					data: {
						deleted: false,
					},
				})
			}
			return {
				code: 200,
				message: 'Topic deleted',
				data: {
					deleted: topicDeleted,
				},
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Deleting Topic',
				data: error,
			})
		}
	}
}
