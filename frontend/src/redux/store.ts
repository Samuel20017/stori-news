import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from 'redux/states/user'

export interface AppStore {
	user: any
}

export default configureStore<AppStore>({
	reducer: {
		user: userSlice.reducer,
	},
})
