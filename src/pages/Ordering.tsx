import React from 'react'
import PageTitle from '@/components/PageTitle'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IOrderInformation } from '@/types'
import { addOrder } from '@/store/slices/orderSlice'
import {
	useAddOrderToOrdersMutation,
	useAddOrderToUserMutation
} from '@/services/OrderService'
import { clearCart } from '@/store/slices/cartSlice'

const Ordering: React.FC = (): JSX.Element => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [addOrderToUser] = useAddOrderToUserMutation()
	const [addOrderToOrders] = useAddOrderToOrdersMutation()
	const currentUser = useAppSelector((state) => state.user)
	const cart = useAppSelector((state) => state.cart.items)
	console.log(cart)
	const cartTotalAmount = useAppSelector((state) => state.cart.itemsTotalPrice)
	const { register, handleSubmit, reset } = useForm<IOrderInformation>()
	const onSubmit: SubmitHandler<IOrderInformation> = (data) => {
		try {
			dispatch(addOrder({ ...data, order: cart, user: currentUser }))
			addOrderToUser({ ...currentUser })
			addOrderToOrders({
				...data,
				order: cart,
				user: {
					email: currentUser.email,
					password: currentUser.password
				}
			})
			reset()
			dispatch(clearCart())
			navigate('/ordering/success')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'Оформление заказа'} link={'/ordering'} />
					<form
						className='flex justify-between'
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className='flex flex-col gap-[81px]'>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>
									Данные покупателя
								</h3>
								<div className='flex flex-col gap-[35px]'>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Имя'
										{...register('name')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='email'
										placeholder='E-mail'
										{...register('email')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='tel'
										placeholder='Телефон'
										{...register('tel')}
									/>
								</div>
							</div>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>Адрес получателя</h3>
								<div className='flex flex-col gap-[35px]'>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Страна'
										{...register('country')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Город'
										{...register('city')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Улица'
										{...register('street')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Дом'
										{...register('house')}
									/>
									<input
										className='text-[17px] leading-[24px] outline-none w-[350px] h-[40px] border-b-2 border-black'
										type='text'
										placeholder='Квартира'
										{...register('appartment')}
									/>
								</div>
							</div>
							<div className='flex flex-col gap-[62px]'>
								<h3 className='text-[25px] leading-[35px]'>Комментарии</h3>
								<div className='flex flex-col gap-[35px]'>
									<textarea
										className='text-[17px] leading-[24px] outline-none w-[443px] h-[134px] border-b-2 border-black resize-none focus:border-2 focus:border-black focus:rounded-2xl py-3 px-4 transition-all duration-75'
										id='message'
										cols={3}
										rows={10}
										placeholder='Оставьте комментарий или пожелание'
										{...register('comment')}
									></textarea>
								</div>
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
									{cart.map((item) => (
										<div key={item.id} className='flex items-center w-[255px]'>
											<span className='w-[196px]'>{item.title}</span>
											<span className='w-[59px]'>${item.totalPrice}</span>
										</div>
									))}

									<div className='flex items-center w-[255px] h-[57px] gap-[137px] bg-linen justify-center'>
										<span className=''>Итого</span>
										<span className=''>${cartTotalAmount}</span>
									</div>
								</div>
							</div>
							<button
								className='w-[266px] h-[68px] text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
								type='submit'
							>
								Разместить заказ
							</button>
						</div>
					</form>
				</section>
			</div>
		</main>
	)
}

export default Ordering
