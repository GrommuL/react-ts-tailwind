import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './icons/ArrowIcon'

const ProductItem: React.FC = (): JSX.Element => {
	return (
		<Link className='flex flex-col gap-[24px] max-w-[350px]' to=''>
			<div className='w-[350px] h-[478px] relative group'>
				<img src='/tshirt.jpg' alt='' />
				<div className='absolute w-full h-full bg-aquaHover z-10 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
					<ArrowIcon />
				</div>
			</div>
			<div className='flex flex-col gap-[7px] text-center'>
				<span className='font-medium text-[20px] leading-[28px]'>
					Футболка USA
				</span>
				<span className='font-medium text-[15px] leading-[21px] text-gold'>
					$129
				</span>
			</div>
		</Link>
	)
}

export default ProductItem
