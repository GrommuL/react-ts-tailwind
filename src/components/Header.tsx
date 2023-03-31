import React from 'react'
import { navigationList } from '@/common/navigationList'
import { Link, NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import BasketIcon from './icons/BasketIcon'

const Header: React.FC = (): JSX.Element => {
	return (
		<header className='pt-[50px]'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<Logo />
					</Link>
					<nav className='flex items-center gap-[45px]'>
						{navigationList.map((item) => (
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
								to={item.path}
							>
								{item.nameLink}
							</NavLink>
						))}
					</nav>
					<div className='flex items-center gap-[35px]'>
						<Link to='/cart'>
							<BasketIcon />
						</Link>
						<Link
							className='hover:text-aqua text-[16px] leading-[22px]'
							to='/login'
						>
							Войти
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
