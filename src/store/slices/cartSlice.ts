import { IProductItem } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface ICart {
	items: IProductItem[]
}
const initialState: ICart = {
	items: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProductItem>) => {
			state.items.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<any>) => {
			const itemId = action.payload
			state.items = state.items.filter((item) => {
				return item.id !== itemId
			})
		}
	}
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
