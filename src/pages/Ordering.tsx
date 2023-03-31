import PageTitle from '@/components/PageTitle'
import React from 'react'
import { Link } from 'react-router-dom'

const Ordering: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'Оформление заказа'} link={'/ordering'} />
					<div className='flex justify-between'>
						<div className='flex flex-col gap-[81px]'>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>
									Данные покупателя
								</h3>
								<form className='flex flex-col gap-[35px]'>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Имя'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='email'
										placeholder='E-mail'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='tel'
										placeholder='Телефон'
									/>
								</form>
							</div>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>Адрес получателя</h3>
								<form className='flex flex-col gap-[35px]'>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Страна'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Город'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Улица'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Дом'
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Квартира'
									/>
								</form>
							</div>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>Комментарии</h3>
								<form className='flex flex-col gap-[35px]'>
									<textarea
										className='text-[17px] leading-[24px] outline-none w-[443px] h-[134px] border-b-2 border-black resize-none focus:border-2 focus:border-black focus:rounded-2xl py-3 px-4 transition-all duration-75'
										id='message'
										cols={3}
										rows={10}
										placeholder='Оставьте комментарий или пожелание'
									></textarea>
								</form>
							</div>
						</div>
						<div className='flex flex-col gap-[130px]'>
							<div className='flex flex-col gap-[47px]'>
								<h3 className='text-[25px] leading-[35px]'>Ваш заказ</h3>
								<div className='flex flex-col gap-[30px]'>
									<div className='flex items-center w-[255px]'>
										<span className='w-[196px]'>Товар</span>
										<span className='w-[59px]'>Всего</span>
									</div>
									<div className='flex items-center w-[255px]'>
										<span className='w-[196px]'>Футболка USA</span>
										<span className='w-[59px]'>$129</span>
									</div>
									<div className='flex items-center w-[255px] h-[57px] gap-[137px] bg-linen justify-center'>
										<span className=''>Итого</span>
										<span className=''>$129</span>
									</div>
								</div>
							</div>
							<Link
								className='w-[266px] h-[68px] text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
								to='/ordering'
							>
								Разместить заказ
							</Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Ordering
