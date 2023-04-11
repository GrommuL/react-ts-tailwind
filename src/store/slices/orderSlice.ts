import { IOrder } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IOrder = {
	name: '',
	email: '',
	tel: '',
	country: '',
	city: '',
	street: '',
	house: '',
	appartment: '',
	comment: '',
	user: {
		email: '',
		password: ''
	},
	order: []
}

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrder: (state, action: PayloadAction<IOrder>) => {
			state.name = action.payload.name
			state.email = action.payload.email
			state.tel = action.payload.tel
			state.country = action.payload.country
			state.city = action.payload.city
			state.street = action.payload.street
			state.house = action.payload.house
			state.appartment = action.payload.appartment
			state.comment = action.payload.comment
			state.order = action.payload.order
		}
	}
})

export const { addOrder } = orderSlice.actions

export default orderSlice.reducer
