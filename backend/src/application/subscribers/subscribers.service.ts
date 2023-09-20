import {
	Injectable,
	Inject,
	NotFoundException,
	InternalServerErrorException,
	ConflictException,
} from '@nestjs/common'
import {
	ISubscriberService,
	ISubscribersRepository,
	subscriber,
} from 'domain/subscribers'
import { ResponseModel } from 'domain/responseModel'

@Injectable()
export class SubscribersService implements ISubscriberService {
	constructor(
		@Inject('ISubscribersRepository')
		private readonly subscribersRepository: ISubscribersRepository
	) {}
	async getById(id: number): Promise<ResponseModel<subscriber>> {
		try {
			const topic = await this.subscribersRepository.getById(id)
			if (topic == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Suscriber not found',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Suscriber found',
				data: topic,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Gettting Suscriber',
				data: error,
			})
		}
	}
	async create(subscriber: subscriber): Promise<ResponseModel<subscriber>> {
		try {
			const createdSubscriber = await this.subscribersRepository.create(
				subscriber
			)
			if (createdSubscriber == null) {
				throw new ConflictException({
					code: 409,
					message: 'Suscriber already exists',
					data: null,
				})
			}
			return {
				code: 201,
				message: 'Suscriber created',
				data: createdSubscriber,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Creating Suscriber',
				data: error,
			})
		}
	}
	async suscribeToTopic(
		subscriberId: number,
		topic: string
	): Promise<ResponseModel<subscriber>> {
		try {
			const suscribedSubscriber = await this.subscribersRepository.getById(
				subscriberId
			)
			if (suscribedSubscriber == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Suscriber not found',
					data: null,
				})
			}
			const suscribed = await this.subscribersRepository.update({
				...suscribedSubscriber,
				topics: [...suscribedSubscriber.topics, topic],
			})
			if (suscribed == null) {
				throw new ConflictException({
					code: 409,
					message: 'Suscriber already suscribed to topic',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Suscriber suscribed to topic',
				data: suscribed,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Suscribing to topic',
				data: error,
			})
		}
	}
	async unsubscribeToTopic(
		subscriberId: number,
		topic: string
	): Promise<ResponseModel<subscriber>> {
		try {
			const unsuscribedSubscriber = await this.subscribersRepository.getById(
				subscriberId
			)
			if (unsuscribedSubscriber == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Suscriber not found',
					data: null,
				})
			}
			const unsuscribed = await this.subscribersRepository.update({
				...unsuscribedSubscriber,
				topics: unsuscribedSubscriber.topics.filter((t) => t !== topic),
			})
			if (unsuscribed == null) {
				throw new ConflictException({
					code: 409,
					message: 'Suscriber already unsuscribed to topic',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Suscriber unsuscribed to topic',
				data: unsuscribed,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Unsuscribing to topic',
				data: error,
			})
		}
	}
	async unsuscribe(subscriberId: number): Promise<ResponseModel<subscriber>> {
		try {
			const unsuscribedSubscriber = await this.subscribersRepository.getById(
				subscriberId
			)
			if (unsuscribedSubscriber == null) {
				throw new NotFoundException({
					code: 404,
					message: 'Suscriber not found',
					data: null,
				})
			}
			const unsuscribed = await this.subscribersRepository.delete(subscriberId)
			if (unsuscribed == false) {
				throw new ConflictException({
					code: 409,
					message: 'Suscriber already unsuscribed',
					data: null,
				})
			}
			return {
				code: 200,
				message: 'Suscriber unsuscribed',
				data: unsuscribedSubscriber,
			}
		} catch (error) {
			throw new InternalServerErrorException({
				code: 500,
				message: 'Something went wrong Unsuscribing',
				data: error,
			})
		}
	}
}
