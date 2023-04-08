import PageTitleMore from '@/components/PageTitleMore'
import { useGetOneProductQuery } from '@/services/ProductsService'
import { addToCart } from '@/store/slices/cartSlice'
import { useAppDispatch } from '@/utils/hooks/redux'
import React from 'react'
import { useParams } from 'react-router-dom'

const Product: React.FC = (): JSX.Element => {
	const [sizeProduct, setSizeProduct] = React.useState<string>('')
	const [count, setCount] = React.useState<number>(1)
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const product = useGetOneProductQuery(id)
	const addItemToCart = (data: any) => {
		dispatch(addToCart({ ...data, count: count }))
	}
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[102px]'>
					<PageTitleMore
						title={`${
							product.data?.category === 'hoody'
								? 'Толстовки'
								: product.data?.category === 'sportsuit'
								? 'Спортивный костюм'
								: product.data?.category === 'sweatshirt'
								? 'Свитшоты'
								: product.data?.category === 'tshort'
								? 'Футболки'
								: ''
						}`}
						link={'/shop'}
						secondTitle={`${product.data?.title}`}
						secondLink={`/product/${id}`}
					/>
					<div className='flex items-center gap-[74px]'>
						<img
							className='w-[536px] h-[729px] object-cover'
							src={`/${product.data?.image}`}
							alt=''
						/>
						<div className='flex flex-col gap-[59px]'>
							<span className='text-[40px] leading-[44px] text-gold'>
								${product.data?.price}
							</span>
							<div className='flex flex-col gap-[34px]'>
								<span className='text-[20px] leading-[28px]'>
									Выберите размер
								</span>
								<div className='flex items-center gap-[14px]'>
									{product.data?.size.map((item) => (
										<button
											className={
												sizeProduct === item
													? 'w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center uppercase bg-black text-white'
													: 'w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center border border-black uppercase hover:bg-black hover:text-white'
											}
											key={item}
											onClick={() => setSizeProduct(item)}
										>
											{item}
										</button>
									))}
								</div>
							</div>
							<div className='flex items-center gap-[17px]'>
								<div className='w-[155px] flex items-center gap-[5px]'>
									<button
										className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
										onClick={() => setCount((prev) => prev - 1)}
									>
										-
									</button>
									<span className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
										{count}
									</span>
									<button
										className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
										onClick={() => setCount((prev) => prev + 1)}
									>
										+
									</button>
								</div>
								<button
									className='w-[289px] h-[68px] text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
									onClick={() => addItemToCart(product.data)}
								>
									Добавить в корзину
								</button>
							</div>
						</div>
					</div>
					<div className='sectionBlock'>
						<h3 className='sectionTitle'>Связанные товары</h3>
						<div className='flex items-center flex-wrap gap-[30px]'>
							{/* <ProductItem />
							<ProductItem /> */}
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Product
