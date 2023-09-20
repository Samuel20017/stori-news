import { useContext } from 'react'
import { NotificationsContext } from 'context/notifications/toastContext'
import useApi from 'services/api/fetchData'
import { AppRoutes } from 'config'
import { useQueryClient } from '@tanstack/react-query'

export const useCreateTopics = () => {
	const { showSuccess, showError } = useContext(NotificationsContext)
	const { putRequest } = useApi()
	const queryClient = useQueryClient()

	const createTopics = async (topic: unknown) => {
		try {
			const response = await putRequest(
				AppRoutes.serverTopicsRoutes.createTopic,
				topic
			)
			queryClient.invalidateQueries()
			showSuccess('Topic created successfully')
			return response.data
		} catch (error) {
			showError('Something went wrong creating the topic')
			throw new Error((error as Error).message)
		}
	}
	return { createTopics }
}
