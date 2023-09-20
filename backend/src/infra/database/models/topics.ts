import {
	Model,
	Column,
	Table,
	PrimaryKey,
	DataType,
} from 'sequelize-typescript'

@Table
export class topics extends Model<topics> {
	@PrimaryKey
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		autoIncrement: true,
	})
	id!: number

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description!: string
}
