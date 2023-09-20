import moment from 'moment'

export const isValidMomentDate = (date: string) => {
	const dateMoment = moment(date, 'DD/MM/YYYY')
	return dateMoment.isValid()
}
