export class user {
	readonly id?: number
	readonly name: string
	readonly email: string
	readonly password: string

	constructor(name: string, email: string, password: string, id?: number) {
		this.name = name
		this.email = email
		this.password = password
		this.id = id
	}
}
