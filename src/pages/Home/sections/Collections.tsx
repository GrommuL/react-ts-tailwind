import ProductItem from '@/components/ProductItem'
import { useGetProductsInHomePageQuery } from '@/services/ProductsService'
import React from 'react'
import { Link } from 'react-router-dom'

const Collections: React.FC = (): JSX.Element => {
	const { data = [] } = useGetProductsInHomePageQuery({ limit: 3 })
	return (
		<section className='mb-[130px]'>
			<div className='container'>
				<div className='sectionBlock'>
					<h3 className='sectionTitle'>Новая коллекция</h3>
					<div className='flex flex-col gap-[65px] items-center'>
						<div className='flex items-center gap-[30px]'>
							{data.map((item) => (
								<ProductItem key={item.id} {...item} />
							))}
						</div>
						<Link
							className='w-[263px] h-[68px] border border-aqua text-aqua flex items-center justify-center text-[17px] leading-[24px] hover:bg-aqua hover:text-white'
							to='/shop'
						>
							Открыть магазин
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Collections
