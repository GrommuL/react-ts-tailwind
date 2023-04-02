import React from 'react'
import { navigationList } from '@/common/navigationList'
import { Link, NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import BasketIcon from './icons/BasketIcon'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { clearUser } from '@/store/slices/userSlice'
import { persistor } from '@/store'

const Header: React.FC = (): JSX.Element => {
	const email = useAppSelector((state) => state.user.email)
	const dispatch = useAppDispatch()
	const clearLogin = () => {
		dispatch(clearUser())
	}
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
								key={item.nameLink}
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
						{email.length ? (
							<button
								className='hover:text-aqua text-[16px] leading-[22px]'
								onClick={clearLogin}
							>
								Выйти
							</button>
						) : (
							<Link
								className='hover:text-aqua text-[16px] leading-[22px]'
								to='/login'
							>
								Войти
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
