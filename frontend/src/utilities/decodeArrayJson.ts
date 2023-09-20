export const decodeArrayJson = (array: string) => {
	const parsedArray = JSON.parse(array)
	if (Array.isArray(parsedArray)) {
		return parsedArray.join(', ')
	}
	return parsedArray
}
