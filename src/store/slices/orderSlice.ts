import { IProductItem } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IOrder {
	name: string
	email: string
	tel: string
	country: string
	city: string
	street: string
	house: string
	appartment: string
	comment: string
	order: IProductItem[]
}

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
	order: []
}

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {}
})

export const {} = orderSlice.actions

export default orderSlice.reducer
