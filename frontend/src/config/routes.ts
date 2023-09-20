export const publicRoutes = {
	Login: '/login',
	SetPasswordReset: '/changePassword/:token',
	SetPassword: '/setPassword',
	ForgotPassword: '/forgot-password',
	PageNotFound: '*',
}

export const privateRoutes = {
	Dashboard: '/dashboard',
}

export const serverTopicsRoutes = {
	getAllTopics: 'topics',
	getTopic: 'topics/:id',
	createTopic: 'topics',
	updateTopic: 'topics/:id',
}

export const serverFilesRoutes = {
	getAllFiles: 'files',
	getFile: 'files/:id',
	createFile: 'files',
	updateFile: 'files/:id',
}
