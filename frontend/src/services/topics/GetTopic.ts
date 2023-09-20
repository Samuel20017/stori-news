import { useContext } from 'react'
import { NotificationsContext } from 'context/notifications/toastContext'
import useApi from 'services/api/fetchData'
import { useQuery } from '@tanstack/react-query'
import { AppRoutes } from 'config'

export const useTopicsById = (topic_id?: string | number) => {
	const { showError } = useContext(NotificationsContext)
	const { getRequest } = useApi()

	const fetchTopic = async () => {
		try {
			const response = await getRequest(
				AppRoutes.serverTopicsRoutes.getTopic,
				topic_id
			)
			return response.data
		} catch (error) {
			showError('Something went wrong getting Topics')
			throw new Error('Something went wrong getting Topics')
		}
	}

	if (!fetchTopic)
		return {
			data: undefined,
			isLoading: undefined,
			error: undefined,
		}

	const { data, isLoading, error } = useQuery(
		['fetchTopic', topic_id],
		fetchTopic
	)

	return { data, isLoading, error }
}
