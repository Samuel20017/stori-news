import { useState, useCallback, useContext, useEffect } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useDropzone } from 'react-dropzone'
import { Button, Container, Spinner } from 'common'
import { useFileUpload } from 'services/api'
import { NotificationsContext } from 'context/notifications/toastContext'

interface Props {
	field: string
	setFieldValue: (field: string, value: string) => void
	value: string
	validExtensions?: string[]
}

export const CreateFile: React.FC<Props> = ({
	field,
	setFieldValue,
	value,
	validExtensions = [],
}: Props) => {
	const { showError } = useContext(NotificationsContext)
	const [fileUrl, setFileUrl] = useState<string>(value || '')
	const [fileName, setFileName] = useState<string>('')
	const [fileLoading, setFileLoading] = useState<boolean>(false)
	const { uploadFile } = useFileUpload()

	useEffect(() => {
		if (value && !fileName) {
			setFileUrl(value)
			setFileName(extractFileName(value))
		}
	}, [value, fileName])

	const onDrop = useCallback(async (files: File[]) => {
		if (files?.length > 0 && files?.length < 2) {
			const file = files[0]
			const fileExt = file.name.split('.').pop()?.toLowerCase() || ''
			if (!validExtensions.includes(fileExt) && validExtensions?.length) {
				const errorMessage = `Invalid format. Only ${
					validExtensions.length > 1
						? `${validExtensions.slice(0, -1).join(', ').toUpperCase()} or `
						: ''
				}${validExtensions
					.slice(-1)
					.join('')
					.toUpperCase()} formats are accepted`

				showError(errorMessage)
				return
			}

			setFileLoading(true)

			const random = Math.floor(Math.random() * 1000)
			const splitFileName = file.name.split('.')[0]
			const splitFileExt = file.name.split('.')[1]
			const fileNameT = `${splitFileName}${random}.${splitFileExt}`

			// upload file to server

			const result = await uploadFile(file)

			if (result?.data?.url) {
				setFileUrl('url')

				setFileName(fileNameT)

				setFieldValue(field, result?.data?.url)
			}

			setFileLoading(false)
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	const removeUploadedFile = async () => {
		if (fileName) {
			setFileLoading(true)
			setFileUrl('')
			setFileName('')
			setFileLoading(false)
			setFieldValue(field, '')
		}
	}

	return (
		<div className="pb-4">
			{fileLoading && !fileUrl && (
				<div className="w-1 h-1 flex justify-center items-center">
					<Spinner />
					<p>Uploading File...</p>
				</div>
			)}
			{!fileLoading && !fileUrl ? (
				<div className="px-2" {...getRootProps()}>
					<div className="mt-1 flex justify-center px-6 py-2 border-2 border-gray-300 border-dashed rounded-md">
						<div className="space-y-1 text-center">
							<svg
								className="mx-auto h-6 w-6 text-gray-400"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 48 48"
								aria-hidden="true"></svg>
							<div className="flex text-sm text-gray-600">
								<div className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
									{!isDragActive && (
										<div>
											<span>Upload a file</span>
											<input
												type="file"
												className="sr-only"
												{...getInputProps()}
											/>
										</div>
									)}
								</div>
								{!isDragActive ? (
									<p className="pl-1">or drag and drop</p>
								) : (
									<p className="pl-1">Drop file here</p>
								)}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="px-4 py-4">
					<h3 className="text-gray-700 leading-6 text-md font-semibold">
						File successfully uploaded!
					</h3>

					<div className="flex items-center pt-4">
						<button type="button" onClick={removeUploadedFile}>
							<XCircleIcon className="text-red-400 h-4 w-4" />
						</button>
						<span className="text-blue-400 pl-2">{fileName}</span>
					</div>
				</div>
			)}
			<br />
			{fileUrl && (
				<Container className="flex justify-center items-center">
					<Button
						size="sm"
						variant="declineInverse"
						onClick={() => {
							removeUploadedFile()
						}}>
						Delete Current File
					</Button>
				</Container>
			)}
		</div>
	)
}

const extractFileName = (url: string) => {
	const splitUrl = url.split('/')
	const fileName = splitUrl[splitUrl.length - 1]
	return fileName
}
