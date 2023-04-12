import { setSearch } from '@/store/slices/searchSlice'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import React from 'react'

const Search: React.FC = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const value = useAppSelector((state) => state.search.value)
	return (
		<input
			value={value}
			onChange={(e) => dispatch(setSearch(e.target.value))}
			className='w-[400px] mx-auto outline-none p-[15px] border border-black'
			type='search'
			placeholder='Введите название товара'
		/>
	)
}

export default Search
