import React from 'react'
import CloseIcon from './icons/CloseIcon'
import { IProductItem } from '@/types'
import { useAppDispatch } from '@/utils/hooks/redux'
import {
	decrementCartCount,
	incrementCartCount,
	removeFromCart
} from '@/store/slices/cartSlice'

const CartItem: React.FC<IProductItem> = (props): JSX.Element => {
	const dispatch = useAppDispatch()
	const cartItemId = props.id
	const totalPrice = props.price * props.count
	const increase = () => {
		dispatch(incrementCartCount(props))
	}
	const decrease = () => {
		dispatch(decrementCartCount(props))
	}

	return (
		<div className='flex items-center'>
			<div className='flex items-center gap-[45px] w-[471px]'>
				<button onClick={() => dispatch(removeFromCart(props))}>
					<CloseIcon />
				</button>
				<div className='flex items-center gap-[36px]'>
					<img
						className='w-[125px] h-[179px] object-cover'
						src={props.image}
						alt=''
					/>
					<p className='text-[17px] leading-[24px]'>{props.title}</p>
				</div>
			</div>
			<span className='w-[190px] text-[17px] leading-[24px]'>
				${props.price}
			</span>
			<div className='w-[285px] flex items-center gap-[5px]'>
				{props.count <= 1 ? (
					<button className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
						-
					</button>
				) : (
					<button
						className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
						onClick={decrease}
					>
						-
					</button>
				)}
				<span className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
					{props.count}
				</span>
				<button
					className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
					onClick={increase}
				>
					+
				</button>
			</div>
			<span className='w-[158px]'>${totalPrice}</span>
		</div>
	)
}

export default CartItem
