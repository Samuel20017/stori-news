import { Button } from 'common'

interface FormActionsProps {
	setOpen: (open: boolean) => void
	isLoading: boolean
	formType: 'create' | 'update' // aquí puedes usar el tipo específico de formType
}

export function FormActions({
	setOpen,
	isLoading,
	formType,
}: FormActionsProps) {
	return (
		<div className="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
			<div className="space-x-3 flex justify-end">
				<button
					type="button"
					className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					onClick={() => setOpen(false)}>
					Cancel
				</button>
				<Button type="submit" isLoading={isLoading} variant="primary" size="sm">
					{formType === 'create' ? 'Create' : 'Update'}
				</Button>
			</div>
		</div>
	)
}
