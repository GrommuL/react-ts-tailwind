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
							Карта с любой точкой
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
					</div>
				</section>
			</div>
		</main>
	)
}

export default Contacts
