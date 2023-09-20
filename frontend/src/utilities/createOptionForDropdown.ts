export const OptionsForDropdown = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	arr: any[] | undefined,
	val: string | number,
	label: string | number
) => {
	if (!arr) {
		return []
	}

	const formattedData = arr.map((item) => {
		return {
			value: item[val],
			label: item[label],
		}
	})
	const sortedArray = formattedData.slice().sort((a, b) => b.value - a.value)

	return sortedArray
}

export const OptionsForDropdownFilter = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	arr: any[] | undefined,
	val: string | number,
	label: string | number | string[],
	filterKey: string | number,
	filterValue: string | number
) => {
	if (!arr) {
		return []
	}

	const formattedData = arr
		.filter((item) => String(item[filterKey]) === String(filterValue))
		.map((item) => {
			if (Array.isArray(label)) {
				return {
					value: item[val],
					label: label.map((labelItem) => item[labelItem]).join(' - '),
				}
			}
			return {
				value: item[val],
				label: item[label],
			}
		})

	const sortedArray = formattedData.slice().sort((a, b) => b.value - a.value)

	return sortedArray
}
