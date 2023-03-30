import PageTitle from '@/components/PageTitle'
import React from 'react'

const Contacts: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'Контакты'} link={'/contacts'} />
					<div className='flex flex-col gap-[130px]'>
						<div className='w-full h-[467px] bg-greyLink flex items-center justify-center'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2skz!4v1680169149392!5m2!1sru!2skz'
								width='100%'
								height='467'
								// allowfullscreen=''
								loading='lazy'
								// referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
						<div className='flex items-center gap-[98px]'>
							<div className='flex flex-col gap-[19px]'>
								<span className='text-[17px] leading-[24px]'>Телефон</span>
								<span className='text-[20px] leading-[28px]'>
									+7 (###) ###-##-##
								</span>
							</div>
							<div className='flex flex-col gap-[19px]'>
								<span className='text-[17px] leading-[24px]'>E-mail</span>
								<span className='text-[20px] leading-[28px]'>
									hello@womazing.com
								</span>
							</div>
							<div className='flex flex-col gap-[19px]'>
								<span className='text-[17px] leading-[24px]'>Адрес</span>
								<span className='text-[20px] leading-[28px]'>г. Москва</span>
							</div>
						</div>
						<div className='flex flex-col gap-[62px]'>
							<h3 className='text-[25px] leading-[35px]'>Напишите нам</h3>
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
								<textarea
									className='text-[17px] leading-[24px] outline-none w-[443px] h-[134px] border-b-2 border-black resize-none'
									id='message'
									cols={3}
									rows={10}
									placeholder='Сообщение'
								></textarea>
								<button
									className='w-[189px] h-[68px] text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
									type='submit'
								>
									Отправить
								</button>
							</form>
							<div></div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Contacts
