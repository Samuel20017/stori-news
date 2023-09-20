export const sortJsonByStringFields = <T extends Record<string, string>>(
	jsonArray: T[],
	field: keyof T
) => {
	jsonArray.sort(function (a, b) {
		const fieldA = a[field].toUpperCase()
		const fieldB = b[field].toUpperCase()
		if (fieldA < fieldB) {
			return -1
		}
		if (fieldA > fieldB) {
			return 1
		}
		return 0
	})
}
