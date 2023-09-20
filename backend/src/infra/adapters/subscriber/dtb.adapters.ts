import { Injectable, Inject } from '@nestjs/common'
import { ISubscribersRepository, subscriber } from 'domain/subscribers'
import { PostgresAdapter, subscribers as SubscribersDb } from 'infra/database'

@Injectable()
export class SuscriberDtb implements ISubscribersRepository {
	constructor(@Inject(PostgresAdapter) private readonly dtb: PostgresAdapter) {}
	async getAll(): Promise<subscriber[]> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const subscribers = await db.model(SubscribersDb).findAll()

			const dataResult = subscribers.map((item) => item.toJSON() as subscriber)
			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve([])
		}
	}
	async getById(id: number): Promise<subscriber> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const subscriber = await db.model(SubscribersDb).findOne({
				where: {
					id: id,
				},
			})
			if (subscriber == null) {
				return Promise.resolve(null)
			}
			const dataResult = subscriber.toJSON() as subscriber
			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async create(subscriber: subscriber): Promise<subscriber> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const createdSubscriber = await db
				.model(SubscribersDb)
				.create(subscriber as any)
			const dataResult = createdSubscriber.toJSON() as subscriber
			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async update(subscriber: subscriber): Promise<subscriber> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			await db.model(SubscribersDb).update(subscriber as any, {
				where: {
					id: subscriber.id,
				},
			})
			const dataResult = this.getById(subscriber.id)
			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async delete(id: number): Promise<boolean> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			await db.model(SubscribersDb).destroy({
				where: {
					id: id,
				},
			})
			return Promise.resolve(true)
		} catch (error) {
			return Promise.resolve(false)
		}
	}
}
