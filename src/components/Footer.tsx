import { navigationList } from '@/common/navigationList'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { SlSocialTwitter } from 'react-icons/sl'
import masterCard from '@/assets/visa-mastercard.png'

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className='bg-linen py-[90px]'>
			<div className='container'>
				<div className='flex flex-col gap-[30px]'>
					<div className='flex items-center justify-between'>
						<Link to='/'>
							<Logo />
						</Link>
						<nav className='flex items-center gap-[45px]'>
							{navigationList.map((item) => (
								<NavLink
									key={item.nameLink}
									className={({ isActive }) =>
										isActive ? 'activeLink' : 'link'
									}
									to={item.path}
								>
									{item.nameLink}
								</NavLink>
							))}
						</nav>
						<div className='flex flex-col gap-[9px]'>
							<a className='hover:text-aqua' href='tel:+'>
								+7 (###) ###-##-##
							</a>
							<a className='hover:text-aqua' href='mailto:'>
								hello@womazing.com
							</a>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-[6px]'>
							<p className='font-normal text-[13px] leading-[18px]'>
								© Все права защищены
							</p>
							<p className='font-normal text-[13px] leading-[18px]'>
								Политика конфиденциальности
							</p>
							<p className='font-normal text-[13px] leading-[18px]'>
								Публичная оферта
							</p>
						</div>
						<div className='flex flex-col items-end gap-[30px]'>
							<div className='flex items-center gap-[12px]'>
								<Link
									className='text-[28px]'
									target='_blank'
									to='https://www.instagram.com/'
								>
									<AiOutlineInstagram />
								</Link>
								<Link
									className='text-[28px]'
									target='_blank'
									to='https://facebook.com/'
								>
									<AiOutlineFacebook />
								</Link>
								<Link
									className='text-[28px]'
									target='_blank'
									to='https://twitter.com/'
								>
									<SlSocialTwitter />
								</Link>
							</div>
							<Link to='/'>
								<img src={masterCard} alt='' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
