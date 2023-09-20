import * as bcrypt from 'bcrypt'
import { Injectable, Inject } from '@nestjs/common'
import { IUserRepository, user } from 'domain/users'
import { PostgresAdapter, topics as topicsDb } from 'infra/database'

@Injectable()
export class UserDtb implements IUserRepository {
	constructor(@Inject(PostgresAdapter) private readonly dtb: PostgresAdapter) {}

	async getAll(): Promise<user[]> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db.model(topicsDb).findAll({})
			if (topics == null) {
				return []
			}
			const dataResult = topics.map((item) => item.toJSON() as user)

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve([])
		}
	}
	async getById(id: number): Promise<user> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db.model(topicsDb).findOne({ where: { id } })
			if (topics == null) {
				return null
			}
			const dataResult = topics.toJSON() as user

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async create(user: user): Promise<user> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db.model(topicsDb).create(user as any)
			if (topics == null) {
				return null
			}
			const dataResult = topics.toJSON() as user

			return Promise.resolve(dataResult)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async update(user: user): Promise<user> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db
				.model(topicsDb)
				.update(user as any, { where: { id: user.id }, returning: true })
			if (topics == null) {
				return null
			}

			return Promise.resolve(null)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async delete(id: number): Promise<boolean> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db.model(topicsDb).destroy({ where: { id } })
			if (topics == null) {
				return false
			}

			return Promise.resolve(true)
		} catch (error) {
			return Promise.resolve(false)
		}
	}
	async changePassword(user: user): Promise<{
		changed: boolean
	}> {
		try {
			const db = await this.dtb.getSequelizeInstance()
			const topics = await db
				.model(topicsDb)
				.update(user as any, { where: { id: user.id }, returning: true })
			if (topics == null) {
				return null
			}

			return Promise.resolve(null)
		} catch (error) {
			return Promise.resolve(null)
		}
	}
	async comparePassword(
		password: string,
		hashedPassword: string
	): Promise<boolean> {
		try {
			const isMatch = await bcrypt.compare(password, hashedPassword)
			return Promise.resolve(isMatch)
		} catch (error) {
			return Promise.resolve(false)
		}
	}
}
