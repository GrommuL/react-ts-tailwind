import PageTitleMore from '@/components/PageTitleMore'
import ProductItem from '@/components/ProductItem'
import React from 'react'

const Product: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[102px]'>
					<PageTitleMore
						title='Свитшоты'
						link='линк с выбраной категорией'
						secondTitle='Свитшот Sweet Shot'
						secondLink='/product/:id'
					/>
					<div className='flex items-center gap-[74px]'>
						<img className='w-[536px] h-[729px]' src='/tshirt.jpg' alt='' />
						<div className='flex flex-col gap-[59px]'>
							<span className='text-[40px] leading-[44px] text-gold'>$311</span>
							<div className='flex flex-col gap-[34px]'>
								<span className='text-[20px] leading-[28px]'>
									Выберите размер
								</span>
								<div className='flex items-center gap-[14px]'>
									<button className='w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center border border-black uppercase hover:bg-black hover:text-white'>
										s
									</button>
									<button className='w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center border border-black uppercase hover:bg-black hover:text-white'>
										m
									</button>
									<button className='w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center border border-black uppercase hover:bg-black hover:text-white'>
										l
									</button>
									<button className='w-[41px] h-[41px] text-[17px] leading-[24px] flex items-center justify-center border border-black uppercase hover:bg-black hover:text-white'>
										xl
									</button>
								</div>
							</div>
							<div className='flex flex-col gap-[34px]'>
								<span className='text-[20px] leading-[28px]'>
									Выберите цвет
								</span>
								<div className='flex items-center gap-[14px]'>
									<button className='w-[41px] h-[41px] rounded-full bg-red-600 hover:border-2 hover:border-black'></button>
									<button className='w-[41px] h-[41px] rounded-full bg-red-400 hover:border-2 hover:border-black'></button>
									<button className='w-[41px] h-[41px] rounded-full bg-red-300 hover:border-2 hover:border-black'></button>
									<button className='w-[41px] h-[41px] rounded-full bg-red-500 hover:border-2 hover:border-black'></button>
								</div>
							</div>
							<div className='flex items-center gap-[17px]'>
								<div className='w-[155px] flex items-center gap-[5px]'>
									<button className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'>
										-
									</button>
									<span className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
										1
									</span>
									<button className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'>
										+
									</button>
								</div>
								<button className='w-[289px] h-[68px] text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'>
									Добавить в корзину
								</button>
							</div>
						</div>
					</div>
					<div className='sectionBlock'>
						<h3 className='sectionTitle'>Связанные товары</h3>
						<div className='flex items-center flex-wrap gap-[30px]'>
							<ProductItem />
							<ProductItem />
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Product
