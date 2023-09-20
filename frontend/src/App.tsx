import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AppRoutes } from 'config'

import { PageNotFound, DashboardPages } from 'pages'

import { Spinner } from 'common'

function App() {
	const location = useLocation()
	const background = location?.state && location?.state?.background
	const backgroudName = location?.state && location?.state?.name

	return (
		<>
			<Suspense fallback={<Spinner />}>
				{/* Main Section of Routes */}
				<Routes location={background || location}>
					<Route
						path="/"
						element={<Navigate to={AppRoutes.privateRoutes.Dashboard} />}
					/>
					{/* route for 404 page not found  */}
					<Route
						path={AppRoutes.publicRoutes.PageNotFound}
						element={<PageNotFound.PageNotFoundMain />}
					/>
					{/* Dashboard  */}
					<Route
						path={AppRoutes.privateRoutes.Dashboard}
						element={<DashboardPages.Dashboard />}
					/>
				</Routes>
				{/* Routes for Edit Modals */}
				<Routes location={location}>
					{background && backgroudName ? renderEditModals(backgroudName) : null}
					<Route path="*" element={null} />
				</Routes>
			</Suspense>
		</>
	)
}

const renderEditModals = (backgroudName: string) => {
	switch (backgroudName) {
		case 'editTopics':
			return <Route path={'editTopics'} element={<></>} />
	}
}

export default App
