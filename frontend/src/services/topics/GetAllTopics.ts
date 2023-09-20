import { useContext } from 'react'
import { NotificationsContext } from 'context/notifications/toastContext'
import useApi from 'services/api/fetchData'
import { AppRoutes } from 'config'
import { useQuery } from '@tanstack/react-query'

export const useTopics = () => {
	const { showError } = useContext(NotificationsContext)
	const { getRequest } = useApi()

	const fetchAllTopics = async () => {
		try {
			const response = await getRequest(
				AppRoutes.serverTopicsRoutes.getAllTopics
			)
			return response.data
		} catch (error) {
			showError('Something went wrong getting Topics')
			throw new Error('Something went wrong getting Topics')
		}
	}

	const { data, isLoading, error } = useQuery(['topics'], fetchAllTopics)

	return { data, isLoading, error }
}
