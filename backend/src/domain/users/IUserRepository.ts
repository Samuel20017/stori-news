import { user } from './User'

export interface IUserRepository {
	getAll(): Promise<user[]>
	getById(id: number): Promise<user | null>
	create(user: user): Promise<user>
	update(user: user): Promise<user>
	delete(id: number): Promise<boolean>
	changePassword(user: user): Promise<{
		changed: boolean
	}>
	comparePassword(password: string, hashedPassword: string): Promise<boolean>
}
