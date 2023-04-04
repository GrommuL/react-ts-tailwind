import { IProductItem } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProductItem = {
	title: '',
	price: 0,
	image: '',
	category: '',
	size: [],
	colors: [],
	inStock: 0
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetchProducts: (state, action: PayloadAction<IProductItem>) => {
			state.id = action.payload.id
			state.title = action.payload.title
			state.price = action.payload.price
			state.image = action.payload.image
			state.category = action.payload.category
			state.size = action.payload.size
			state.colors = action.payload.colors
			state.inStock = action.payload.inStock
		}
	}
})

export const { fetchProducts } = productsSlice.actions

export default productsSlice.reducer
