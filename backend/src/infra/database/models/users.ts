import {
	Model,
	Column,
	Table,
	PrimaryKey,
	DataType,
} from 'sequelize-typescript'

@Table
export class users extends Model<users> {
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
	name!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password!: string
}
