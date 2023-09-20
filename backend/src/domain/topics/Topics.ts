export class Topic {
	readonly id?: number
	readonly title: string
	readonly description: string

	constructor(title: string, description: string, id?: number) {
		this.title = title
		this.description = description
		this.id = id
	}
}
