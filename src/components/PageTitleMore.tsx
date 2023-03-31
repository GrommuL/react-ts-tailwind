import React from 'react'
import { Link, NavLink } from 'react-router-dom'

interface IPageTitleMoreProps {
	title: string
	secondTitle: string
	link: string
	secondLink: string
}

const PageTitleMore: React.FC<IPageTitleMoreProps> = (props): JSX.Element => {
	return (
		<div className='flex flex-col gap-[26px]'>
			<h2 className='text-[55px] leading-[61px]'>{props.secondTitle}</h2>
			<div className='flex items-center gap-[13px] text-[17px] leading-[24px]'>
				<Link className='text-[17px] leading-[24px]' to='/'>
					Главная
				</Link>
				-
				<NavLink className='text-[17px] leading-[24px]' to={props.link}>
					{props.title}
				</NavLink>
				-
				<NavLink
					className='text-[17px] leading-[24px] text-greyLink'
					to={props.secondLink}
				>
					{props.secondTitle}
				</NavLink>
			</div>
		</div>
	)
}

export default PageTitleMore
