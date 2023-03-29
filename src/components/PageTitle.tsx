import React from 'react'
import { Link, NavLink } from 'react-router-dom'

interface IPageTitleProps {
	title: string
	link: string
}

const PageTitle: React.FC<IPageTitleProps> = (props): JSX.Element => {
	return (
		<div className='flex flex-col gap-[26px]'>
			<h2 className='text-[55px] leading-[61px]'>{props.title}</h2>
			<div className='flex items-center gap-[13px] text-[17px] leading-[24px]'>
				<Link className='text-[17px] leading-[24px]' to='/'>
					Главная
				</Link>
				-
				<NavLink
					className='text-[17px] leading-[24px] text-greyLink'
					to={props.link}
				>
					{props.title}
				</NavLink>
			</div>
		</div>
	)
}

export default PageTitle
