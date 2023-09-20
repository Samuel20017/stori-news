import { subscriber } from './Subscribers'
import { ResponseModel } from '../responseModel'

export interface ISubscriberService {
	getById(id: number): Promise<ResponseModel<subscriber | null>>
	create(subscriber: subscriber): Promise<ResponseModel<subscriber>>
	suscribeToTopic(
		subscriberId: number,
		topic: string
	): Promise<ResponseModel<subscriber | null>>
	unsubscribeToTopic(
		subscriberId: number,
		topic: string
	): Promise<ResponseModel<subscriber | null>>
	unsuscribe(subscriberId: number): Promise<ResponseModel<subscriber | null>>
}
