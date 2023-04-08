import { IProductItem } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface ICart {
	items: IProductItem[]
	itemsTotalPrice: number
}
const initialState: ICart = {
	items: [],
	itemsTotalPrice: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProductItem>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)
			if (itemIndex >= 0) {
				state.items[itemIndex].count += 1
				state.items[itemIndex].totalPrice =
					state.items[itemIndex].price * state.items[itemIndex].count
			} else {
				state.items.push(action.payload)
				state.items.forEach((item) => {
					item.totalPrice = item.price * item.count
				})
			}
			state.itemsTotalPrice = state.items.reduce((acc, item) => {
				return acc + item.totalPrice
			}, 0)
		},
		removeFromCart: (state, action: PayloadAction<IProductItem>) => {
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id
			})
			state.itemsTotalPrice = state.items.reduce((acc, item) => {
				return acc + item.totalPrice
			}, 0)
		},
		incrementCartCount: (state, action: PayloadAction<IProductItem>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)

			state.items[itemIndex].count += 1
			state.items[itemIndex].totalPrice =
				state.items[itemIndex].price * state.items[itemIndex].count
			state.itemsTotalPrice = state.items.reduce((acc, item) => {
				return acc + item.totalPrice
			}, 0)
		},
		decrementCartCount: (state, action: PayloadAction<IProductItem>) => {
			const itemIndex = state.items.findIndex((i) => i.id === action.payload.id)

			state.items[itemIndex].count -= 1
			state.items[itemIndex].totalPrice =
				state.items[itemIndex].price * state.items[itemIndex].count
			state.itemsTotalPrice = state.items.reduce((acc, item) => {
				return acc + item.totalPrice
			}, 0)
		},
		clearCart: (state) => {
			state.items = []
			state.itemsTotalPrice = 0
		}
	}
})

export const {
	addToCart,
	removeFromCart,
	incrementCartCount,
	decrementCartCount,
	clearCart
} = cartSlice.actions

export default cartSlice.reducer
