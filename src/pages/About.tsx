import PageTitle from '@/components/PageTitle'
import React from 'react'
import aboutImageOne from '@/assets/about-1.jpg'
import aboutImageTwo from '@/assets/about-2.jpg'
import { Link } from 'react-router-dom'

const About: React.FC = (): JSX.Element => {
	return (
		<main className='mt-[190px] mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[214px]'>
					<PageTitle title={'О бренде'} link={'/about'} />
					<div className='flex flex-col gap-[130px] items-center'>
						<div className='flex items-center gap-[94px]'>
							<img src={aboutImageOne} alt='' />
							<div className='flex flex-col gap-[46px]'>
								<h3 className='text-[24px] leading-[35px]'>Идея и женщина</h3>
								<p className='text-[17px] leading-[24px] flex flex-col gap-[15px] max-w-[542px]'>
									<span>
										Womazing была основана в 2010-ом и стала одной из самых
										успешных компаний нашей страны. Как и многие итальянские
										фирмы, Womazing остаётся семейной компанией, хотя ни один из
										членов семьи не является модельером.
									</span>
									<span>
										Мы действуем по успешной формуле, прибегая к услугам
										известных модельеров для создания своих коллекций. Этот
										метод был описан критиком моды Колином Макдауэллом как форма
										дизайнерского со-творчества, характерная для ряда
										итальянских prêt-a-porter компаний.
									</span>
								</p>
							</div>
						</div>
						<div className='flex items-center gap-[94px]'>
							<div className='flex flex-col gap-[46px]'>
								<h3 className='text-[24px] leading-[35px]'>Магия в деталях</h3>
								<p className='text-[17px] leading-[24px] flex flex-col gap-[15px] max-w-[542px]'>
									<span>
										Первый магазин Womazing был открыт в маленьком городке на
										севере страны в 2010-ом году. Первая коллекция состояла из
										двух пальто и костюма, которые были копиями парижских
										моделей.
									</span>
									<span>
										Несмотря на то, что по образованию основательница была
										адвокатом, ее семья всегда была тесно связана с шитьём
										(прабабушка основательницы шила одежду для женщин, а мать
										основала профессиональную школу кроя и шитья). Стремление
										производить одежду для масс несло в себе большие
										перспективы, особенно в то время, когда высокая мода
										по-прежнему доминировала, а рынка качественного
										prêt-a-porter попросту не существовало.
									</span>
								</p>
							</div>
							<img src={aboutImageTwo} alt='' />
						</div>
						<Link
							className='w-[263px] h-[68px] bg-aqua text-white flex items-center justify-center text-[17px] leading-[24px] hover:bg-aquaBright'
							to='/shop'
						>
							Перейти в магазин
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}

export default About
