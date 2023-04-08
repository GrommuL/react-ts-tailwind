import { IProductItem } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface ICart {
	items: IProductItem[]
	itemTotalQuantity: number
	itemTotalAmount: number
}
const initialState: ICart = {
	items: [],
	itemTotalQuantity: 0,
	itemTotalAmount: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProductItem>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)
			if (itemIndex >= 0) {
				state.items[itemIndex].count += 1
			} else {
				state.items.push(action.payload)
			}
		},
		removeFromCart: (state, action: PayloadAction<any>) => {
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id
			})
		},
		incrementCartCount: (state, action: PayloadAction<IProductItem>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)

			state.items[itemIndex].count += 1
		},
		decrementCartCount: (state, action: PayloadAction<any>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)

			state.items[itemIndex].count -= 1
		}
	}
})

export const {
	addToCart,
	removeFromCart,
	incrementCartCount,
	decrementCartCount
} = cartSlice.actions

export default cartSlice.reducer
