import {
	Model,
	Column,
	Table,
	PrimaryKey,
	DataType,
} from 'sequelize-typescript'

@Table
export class subscribers extends Model<subscribers> {
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
		type: DataType.ARRAY(DataType.STRING),
		allowNull: false,
	})
	topics!: string[]

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	subscribed!: boolean
}
