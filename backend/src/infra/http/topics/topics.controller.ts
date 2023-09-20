import {
	Controller,
	Inject,
	Get,
	Post,
	Put,
	Body,
	HttpCode,
	Param,
} from '@nestjs/common'
import { ITopicsService, Topic } from 'domain/topics'
import { ResponseModel } from 'domain/responseModel'

@Controller('topics')
export class TopicsController {
	constructor(
		@Inject('ITopicsService')
		private readonly topicsService: ITopicsService
	) {}

	@Get()
	@HttpCode(200)
	async getAll(): Promise<ResponseModel<Topic[]>> {
		const response = await this.topicsService.getAll()
		return response
	}

	@Get(':id')
	@HttpCode(200)
	async getById(@Param('id') id: number): Promise<ResponseModel<Topic>> {
		const response = await this.topicsService.getById(id)
		return response
	}

	@Post()
	@HttpCode(201)
	async create(@Body() topic: Topic): Promise<ResponseModel<Topic>> {
		const response = await this.topicsService.create(topic)
		return response
	}

	@Put()
	@HttpCode(200)
	async update(@Body() topic: Topic): Promise<ResponseModel<Topic>> {
		const response = await this.topicsService.update(topic)
		return response
	}
}
