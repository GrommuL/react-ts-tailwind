import { categoriesList } from '@/common/categoriesList'
import PageTitle from '@/components/PageTitle'
import ProductItem from '@/components/ProductItem'
import { useGetProductsQuery } from '@/services/ProductsService'
import React from 'react'

const Shop: React.FC = (): JSX.Element => {
	const [category, setCategory] = React.useState('all')
	const { data = [] } = useGetProductsQuery({ filter: category, limit: 9 })
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'Магазин'} link={'/shop'} />
					<div className='flex flex-col gap-[92px]'>
						<div className='flex items-center justify-center gap-[10px]'>
							{categoriesList.map((item) => (
								<button
									key={item.title}
									className={
										category === item.category
											? 'categoryButtonActive'
											: 'categoryButton'
									}
									onClick={() => setCategory(item.category)}
								>
									{item.title}
								</button>
							))}
						</div>
						<div className='flex flex-col gap-[65px]'>
							<div className='flex items-center gap-[30px] flex-wrap'>
								{data
									.filter((product) => {
										if (category === 'all') {
											return product
										}
										return product.category === category
									})
									.map((item) => (
										<ProductItem key={item.id} {...item} />
									))}
							</div>
							{/* <span>Показано: 9 из {data.length} товаров</span>
							<div className='flex items-center justify-center gap-[14px]'>
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
