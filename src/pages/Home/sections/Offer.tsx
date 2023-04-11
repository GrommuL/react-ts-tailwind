import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'swiper/css'
import 'swiper/css/pagination'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'
import mainPhoto from '@/assets/mainPhoto.jpg'
import secondPhoto from '@/assets/secondPhoto.jpg'
import thirdPhoto from '@/assets/thirdPhoto.jpg'
import { Link } from 'react-router-dom'

const Offer: React.FC = (): JSX.Element => {
	return (
		<section className='pt-[40px] relative mb-[130px]'>
			<div className='container'>
				<div className='flex items-center gap-[150px]'>
					<Swiper
						loop={true}
						speed={700}
						autoplay={{ delay: 4000 }}
						pagination={true}
						modules={[Pagination, Autoplay]}
						className='mySwiper'
					>
						<SwiperSlide>
							<div className='flex flex-col items-center gap-[50px]'>
								<h2 className='font-medium text-[55px] leading-[61px]'>
									Включай новый сезон с{' '}
									<span className='uppercase'>WOMAZING</span>
								</h2>
								<p className='font-normal text-[20px] leading-[28px] text-right max-w-[385px]'>
									Мы обновили ассортимент - легендарные коллекции и новинки от
									отечественных дизайнеров
								</p>
								<Link
									className='w-[310px] h-[68px] flex items-center group'
									to='/shop'
								>
									<span className='w-[67px] h-[68px] flex items-center justify-center bg-aquaLight'>
										<ArrowDownIcon />
									</span>
									<span className='w-[263px] h-[68px] text-white bg-aqua flex items-center justify-center group-hover:bg-aquaBright'>
										Открыть магазин
									</span>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col items-center gap-[50px]'>
								<h2 className='font-medium text-[53px] leading-[61px]'>
									Что-то новенькое.
									<br />
									Мы заждались тебя.
								</h2>
								<p className='font-normal text-[20px] leading-[28px] text-right max-w-[385px]'>
									Надоело искать себя в сером городе? Настало время новых идей,
									свежих красок и вдохновения с Womazing!
								</p>
								<Link
									className='w-[310px] h-[68px] flex items-center group'
									to='/shop'
								>
									<span className='w-[67px] h-[68px] flex items-center justify-center bg-aquaLight'>
										<ArrowDownIcon />
									</span>
									<span className='w-[263px] h-[68px] text-white bg-aqua flex items-center justify-center group-hover:bg-aquaBright'>
										Открыть магазин
									</span>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col items-center gap-[50px]'>
								<h2 className='font-medium text-[53px] leading-[61px]'>
									Новые поступления в этом сезоне
								</h2>
								<p className='font-normal text-[20px] leading-[28px] text-right max-w-[385px]'>
									Утонченные сочетания и бархатные оттенки - вот то, что вы
									искали в этом сезоне. Время исследовать.
								</p>
								<Link
									className='w-[310px] h-[68px] flex items-center group'
									to='/shop'
								>
									<span className='w-[67px] h-[68px] flex items-center justify-center bg-aquaLight'>
										<ArrowDownIcon />
									</span>
									<span className='w-[263px] h-[68px] text-white bg-aqua flex items-center justify-center group-hover:bg-aquaBright'>
										Открыть магазин
									</span>
								</Link>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className='relative'>
						<LazyLoadImage effect='blur' src={mainPhoto} alt='' />
						<LazyLoadImage
							className='absolute top-[100px] -right-[115px]'
							src={secondPhoto}
							alt=''
							effect='blur'
						/>
						<LazyLoadImage
							className='absolute -bottom-[90px] -left-[140px]'
							src={thirdPhoto}
							alt=''
							effect='blur'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Offer
