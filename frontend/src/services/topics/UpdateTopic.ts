import { useContext } from 'react'
import { NotificationsContext } from 'context/notifications/toastContext'
import useApi from 'services/api/fetchData'
import { AppRoutes } from 'config'
import { useQueryClient } from '@tanstack/react-query'

export const useUpdateTopics = () => {
	const { showSuccess, showError } = useContext(NotificationsContext)
	const { postRequest } = useApi()
	const queryClient = useQueryClient()

	const updateTopic = async (topic: unknown, topic_id: number) => {
		try {
			const response = await postRequest(
				AppRoutes.serverTopicsRoutes.updateTopic,
				topic,
				topic_id
			)
			queryClient.invalidateQueries()
			showSuccess('Topic updated successfully')
			return response
		} catch (error) {
			showError('Something went wrong updating Topic')
		}
	}
	return { updateTopic }
}
