import { IAuthState } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IAuthState = {
	email: '',
	password: ''
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<string>) => {
			state.email = action.payload
			state.password = action.payload
		}
	}
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
