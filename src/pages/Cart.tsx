import CartItem from '@/components/CartItem'
import CloseIcon from '@/components/icons/CloseIcon'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const Cart: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'Корзина'} link={'/cart'} />
					<div>
						<div className='flex flex-col gap-[50px]'>
							<div className='flex items-center text-[20px] leading-[28px] border-b-2 border-grey pb-[26px]'>
								<span className='w-[471px]'>Товар</span>
								<span className='w-[190px]'>Цена</span>
								<span className='w-[285px]'>Количество</span>
								<span className='w-[158px]'>Всего</span>
							</div>
							<div className='flex flex-col gap-[20px]'>
								<CartItem />
								<CartItem />
								<CartItem />
								<CartItem />
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Cart
