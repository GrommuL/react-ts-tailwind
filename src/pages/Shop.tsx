import { categoriesList } from '@/common/categoriesList'
import { useGetProductsQuery } from '@/services/ProductsService'
import PageTitle from '@/components/PageTitle'
import ProductItem from '@/components/ProductItem'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { setFilter, setSort } from '@/store/slices/filterSlice'
import Skeleton from '@/components/Skeleton'
import Search from '@/components/Search'
import { useDebounce } from '@/utils/hooks/useDebounce'

const Shop: React.FC = (): JSX.Element => {
	const filter = useAppSelector((state) => state.filter)
	const value = useAppSelector((state) => state.search.value)
	const debouncedValue = useDebounce(value, 1000)
	const dispatch = useAppDispatch()
	const { data = [], isLoading } = useGetProductsQuery({
		filter: filter.filter,
		sort: filter.sort,
		searchValue: debouncedValue
	})
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[114px]'>
					<PageTitle title={'Магазин'} link={'/shop'} />
					<div className='flex flex-col gap-[92px]'>
						<div className='flex flex-col gap-[42px]'>
							<Search />
							<div className='flex items-center justify-center gap-[10px]'>
								{categoriesList.map((item) => (
									<button
										key={item.title}
										className={
											filter.filter === item.category
												? 'categoryButtonActive'
												: 'categoryButton'
										}
										onClick={() => dispatch(setFilter(item.category))}
									>
										{item.title}
									</button>
								))}
							</div>
							<div className='flex items-center justify-center gap-[10px]'>
								<button
									className={
										filter.sort === 'asc'
											? 'categoryButtonActive min-w-[260px]'
											: 'categoryButton min-w-[260px]'
									}
									onClick={() => dispatch(setSort('asc'))}
								>
									По возврастанию
								</button>
								<button
									className={
										filter.sort === 'desc'
											? 'categoryButtonActive min-w-[260px]'
											: 'categoryButton min-w-[260px]'
									}
									onClick={() => dispatch(setSort('desc'))}
								>
									По убыванию
								</button>
							</div>
						</div>
						<div className='flex flex-col gap-[65px]'>
							<div className='flex items-center gap-[30px] flex-wrap'>
								{isLoading
									? [...new Array(6)].map((i) => <Skeleton key={i} />)
									: data
											.filter((obj) => {
												if (
													obj.title.toLowerCase().includes(value.toLowerCase())
												) {
													return true
												}
												return false
											})
											.filter((product) => {
												if (filter.filter === 'all') {
													return product
												}
												return product.category === filter.filter
											})
											.sort((a, b): any => {
												if (filter.sort === 'desc') {
													return a.price - b.price
												} else if (filter.sort === 'asc') {
													return b.price - a.price
												}
											})
											.map((item) => <ProductItem key={item.id} {...item} />)}
							</div>
							{/* <div className='flex items-center justify-center gap-[14px]'>
								<button className='w-[41px] h-[41px] text-white bg-black text-[17px] leading-[24px]'>
									1
								</button>
								<button className='w-[41px] h-[41px] border border-black text-[17px] leading-[24px] hover:text-white hover:bg-black '>
									2
								</button>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Shop
