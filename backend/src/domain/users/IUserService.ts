import { user } from './User'
import { ResponseModel } from '../responseModel'

export interface IUserService {
	getAll(): Promise<ResponseModel<user[]>>
	getById(id: number): Promise<ResponseModel<user | null>>
	create(user: user): Promise<ResponseModel<user>>
	update(user: user): Promise<
		ResponseModel<{
			updated: boolean
			user: user
		}>
	>
	delete(id: number): Promise<
		ResponseModel<{
			deleted: boolean
		}>
	>
	login(user: user): Promise<ResponseModel<user>>
}
