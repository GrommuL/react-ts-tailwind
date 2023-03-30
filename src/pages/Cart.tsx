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
							<div className='flex flex-col gap-[70px]'>
								<div className='flex flex-col gap-[20px]'>
									<CartItem />
									<CartItem />
									<CartItem />
									<CartItem />
								</div>
								<form className='flex items-center gap-[16px]'>
									<input
										className='text-[17px] leading-[24px] outline-none w-[255px] h-[47px] border-b-2 border-black'
										type='text'
										placeholder='Введите купон'
									/>
									<button
										className='text-[17px] leading-[24px] text-aqua border border-aqua flex items-center justify-center py-[22px] px-[50px] hover:bg-aqua hover:text-white'
										type='submit'
									>
										Применить купон
									</button>
								</form>
								<div className='flex items-center justify-end gap-[15px]'>
									<div className='flex items-center justify-center gap-[69px] w-[287px] h-[68px] bg-linen'>
										<span className='text-[25px] leading-[35px]'>Итого:</span>
										<span className='text-[25px] leading-[35px]'>$129</span>
									</div>
									<button
										className='text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
										type='button'
									>
										Оформить заказ
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Cart
