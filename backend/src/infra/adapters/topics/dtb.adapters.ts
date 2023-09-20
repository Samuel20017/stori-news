import { Injectable, Inject } from '@nestjs/common'
import { ITopicsRepository, Topic } from 'domain/topics'
import { PostgresAdapter, topics as ToppicsDb } from 'infra/database'

@Injectable()
export class TopicsDtb implements ITopicsRepository {
	constructor(@Inject(PostgresAdapter) private readonly dtb: PostgresAdapter) {}
	async getAll(): Promise<Topic[]> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const jobs = await db.model(ToppicsDb).findAll()

			const dataResult = jobs.map((item) => item.toJSON() as Topic)
			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve([])
		}
	}
	async getById(id: number): Promise<Topic> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const jobs = await db.model(ToppicsDb).findOne({ where: { id } })
			if (jobs == null) {
				return null
			}
			const dataResult = jobs.toJSON() as Topic

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async create(topic: Topic): Promise<Topic> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const jobs = await db.model(ToppicsDb).create(topic as any)
			if (jobs == null) {
				return null
			}
			const dataResult = jobs.toJSON() as Topic

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async update(topic: Topic): Promise<Topic> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const jobs = await db
				.model(ToppicsDb)
				.update(topic as any, { where: { id: topic.id }, returning: true })
			if (jobs == null) {
				return null
			}
			const dataResult = jobs[1][0].toJSON() as Topic

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async delete(id: number): Promise<boolean> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const jobs = await db.model(ToppicsDb).destroy({ where: { id } })
			if (jobs == null) {
				return false
			}

			return Promise.resolve(true)
		} catch (error) {
			return Promise.resolve(false)
		}
	}
}
