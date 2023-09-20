import { subscriber } from './Subscribers'

export interface ISubscribersRepository {
	getAll(): Promise<subscriber[]>
	getById(id: number): Promise<subscriber | null>
	create(subscriber: subscriber): Promise<subscriber>
	update(subscriber: subscriber): Promise<subscriber>
	delete(id: number): Promise<boolean>
}
