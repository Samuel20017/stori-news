import { Topic } from './Topics'
import { ResponseModel } from '../responseModel'

export interface ITopicsService {
	getAll(): Promise<ResponseModel<Topic[]>>
	getById(id: number): Promise<ResponseModel<Topic | null>>
	create(topic: Topic): Promise<ResponseModel<Topic>>
	update(topic: Topic): Promise<ResponseModel<Topic>>
	delete(id: number): Promise<
		ResponseModel<{
			deleted: boolean
		}>
	>
}
