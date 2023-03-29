import ProductItem from '@/components/ProductItem'
import React from 'react'

const Collections: React.FC = (): JSX.Element => {
	return (
		<section className='mb-[130px]'>
			<div className='container'>
				<div className='sectionBlock'>
					<h3 className='sectionTitle'>Новая коллекция</h3>
					<div className='flex items-center gap-[30px]'>
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Collections
