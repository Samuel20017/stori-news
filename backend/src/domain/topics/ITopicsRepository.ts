import { Topic } from './Topics'

export interface ITopicsRepository {
	getAll(): Promise<Topic[]>
	getById(id: number): Promise<Topic | null>
	create(topic: Topic): Promise<Topic>
	update(topic: Topic): Promise<Topic>
	delete(id: number): Promise<boolean>
}
