import { IParams } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IParams = {
	filter: 'all',
	limit: 6
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string>) => {
			state.filter = action.payload
		},
		setSort: (state, action: PayloadAction<string>) => {
			state.sort = action.payload
		}
	}
})

export const { setFilter, setSort } = filterSlice.actions

export default filterSlice.reducer
