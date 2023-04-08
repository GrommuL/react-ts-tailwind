import { IUser } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IUser = {
	email: '',
	password: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.email = action.payload.email
			state.password = action.payload.password
		},
		clearUser: (state) => {
			state.email = ''
			state.password = ''
		},
		loginUser: (state, action: PayloadAction<IUser>) => {
			state.email = action.payload.email
			state.password = action.payload.password
		}
	}
})

export const { addUser, clearUser, loginUser } = userSlice.actions

export default userSlice.reducer
