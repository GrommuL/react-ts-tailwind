import React from 'react'
import { Link } from 'react-router-dom'
import { IProductItem } from '@/types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ArrowIcon from './icons/ArrowIcon'

const ProductItem: React.FC<IProductItem> = (props): JSX.Element => {
	return (
		<Link
			className='flex flex-col gap-[24px] max-w-[350px]'
			to={`/product/${props.id}`}
		>
			<div className='w-[350px] relative group'>
				<LazyLoadImage effect='blur' src={props.image} alt='' />
				<div className='absolute w-full h-full bg-aquaHover z-10 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
					<ArrowIcon />
				</div>
			</div>
			<div className='flex flex-col gap-[7px] text-center'>
				<span className='font-medium text-[20px] leading-[28px]'>
					{props.title}
				</span>
				<span className='font-medium text-[15px] leading-[21px] text-gold'>
					${props.price}
				</span>
			</div>
		</Link>
	)
}

export default ProductItem
