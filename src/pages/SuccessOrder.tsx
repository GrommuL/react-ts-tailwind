import OrderSuccessIcon from '@/components/icons/OrderSuccessIcon'
import PageTitleMore from '@/components/PageTitleMore'
import React from 'react'
import { Link } from 'react-router-dom'

const SuccessOrder: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitleMore
						title={'Оформление заказа'}
						link={'/ordering'}
						secondTitle={'Заказ получен'}
						secondLink={'/ordering/success'}
					/>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-[32px]'>
							<OrderSuccessIcon />
							<div className='flex flex-col gap-[17px]'>
								<h4 className='text-[25px] leading-[35px]'>
									Заказ успешно оформлен
								</h4>
								<p className='text-[17px] leading-[24px]'>
									Мы свяжемся с вами в ближайшее время!
								</p>
							</div>
						</div>
						<Link
							className='w-[302px] h-[68px] text-[17px] leading-[24px] text-aqua border border-aqua flex items-center justify-center py-[22px] px-[55px] hover:text-white hover:bg-aqua'
							to='/'
						>
							Перейти на главную
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}

export default SuccessOrder
