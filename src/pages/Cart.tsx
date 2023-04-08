import CartItem from '@/components/CartItem'
import CloseIcon from '@/components/icons/CloseIcon'
import PageTitle from '@/components/PageTitle'
import { useAppSelector } from '@/utils/hooks/redux'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart: React.FC = (): JSX.Element => {
	const cartItems = useAppSelector((state) => state.cart)
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
							{cartItems.items.length ? (
								<div className='flex flex-col gap-[70px]'>
									<div className='flex flex-col gap-[20px]'>
										{cartItems.items.map((item) => (
											<CartItem key={item.id} {...item} />
										))}
									</div>
									<div className='flex items-center justify-end gap-[15px]'>
										<div className='flex items-center justify-center gap-[69px] w-[287px] h-[68px] bg-linen'>
											<span className='text-[25px] leading-[35px]'>Итого:</span>
											<span className='text-[25px] leading-[35px]'>
												${cartItems.itemsTotalPrice}
											</span>
										</div>
										<Link
											className='text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
											to='/ordering'
										>
											Оформить заказ
										</Link>
									</div>
								</div>
							) : (
								<div className='flex flex-col gap-[100px] items-center'>
									<p className='text-center font-bold text-[34px] leading-[34px]'>
										В корзине отсутствуют товары
									</p>
									<Link
										className='w-[263px] h-[68px] bg-aqua text-white flex items-center justify-center text-[17px] leading-[24px] hover:bg-aquaBright'
										to='/shop'
									>
										Перейти в магазин
									</Link>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Cart
