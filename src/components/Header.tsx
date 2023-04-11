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
	const cartItemsAmount = useAppSelector((state) => state.cart.items)
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
						<Link className='relative' to='/cart'>
							<BasketIcon />
							{cartItemsAmount.length ? (
								<div className='w-[20px] h-[20px] bg-aqua rounded-full absolute -top-[13px] -right-[11px] flex items-center justify-center text-white text-[12px]'>
									{cartItemsAmount.length}
								</div>
							) : (
								''
							)}
						</Link>
						{email.length ? (
							<div className='flex flex-col gap-1'>
								<p className='text-[15px] leading-[15px] cursor-pointer'>
									{email}
								</p>
								<button
									className='hover:text-aqua text-[16px] leading-[22px]'
									onClick={clearLogin}
								>
									Выйти
								</button>
							</div>
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
