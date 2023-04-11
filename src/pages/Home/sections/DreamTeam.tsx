import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'swiper/css'
import 'swiper/css/pagination'
import dreamTeamOne from '@/assets/dream-team-1.jpg'
import dreamTeamTwo from '@/assets/dream-team-2.jpg'
import dreamTeamThree from '@/assets/dream-team-3.jpg'

const DreamTeam: React.FC = (): JSX.Element => {
	return (
		<section className='mb-[130px]'>
			<div className='container'>
				<div className='sectionBlock'>
					<h3 className='sectionTitle'>Команда мечты Womazing</h3>
					<div className='flex items-center gap-[124px]'>
						<Swiper
							loop={true}
							speed={700}
							autoplay={{ delay: 4000 }}
							pagination={true}
							modules={[Pagination, Autoplay]}
							className='mySwiper pt-0 h-[487px]'
						>
							<SwiperSlide>
								<LazyLoadImage effect='blur' src={dreamTeamOne} alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<LazyLoadImage effect='blur' src={dreamTeamTwo} alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<LazyLoadImage effect='blur' src={dreamTeamThree} alt='' />
							</SwiperSlide>
						</Swiper>
						<div className='w-[255px] flex flex-col gap-[28px]'>
							<h4 className='font-medium text-[25px] leading-[35px]'>
								Для каждой
							</h4>
							<p className='font-medium text-[17px] leading-[24px] flex flex-col gap-[30px]'>
								<span>
									Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
								</span>
								<span>
									Womazing ищет эти мелочи и создает прекрасные вещи, которые
									выгодно подчеркивают достоинства каждой девушки.
								</span>
							</p>
							<Link
								className='font-medium text-[17px] leading-[24px] flex flex-col gap-[30px] text-aqua hover:underline'
								to='/about'
							>
								Подробнее о бренде
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DreamTeam
