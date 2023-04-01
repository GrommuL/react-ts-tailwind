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
		setAuth: (state, action: PayloadAction<IAuthState>) => {
			state.email = action.payload.email
			state.password = action.payload.password
		}
	}
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
