import React from 'react'
import CloseIcon from './icons/CloseIcon'
import { IProductItem } from '@/types'
import { useAppDispatch } from '@/utils/hooks/redux'
import { removeFromCart } from '@/store/slices/cartSlice'

const CartItem: React.FC<IProductItem> = (props): JSX.Element => {
	const [count, setCount] = React.useState<number>(1)
	const dispatch = useAppDispatch()
	const cartItemId = props.id
	// onClick={() => dispatch(removeFromCart())}

	return (
		<div className='flex items-center'>
			<div className='flex items-center gap-[45px] w-[471px]'>
				<button onClick={() => dispatch(removeFromCart(cartItemId))}>
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
				{count <= 1 ? (
					<button
						className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
						disabled
						onClick={() => setCount((prev) => prev - 1)}
					>
						-
					</button>
				) : (
					<button
						className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
						onClick={() => setCount((prev) => prev - 1)}
					>
						-
					</button>
				)}
				<span className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
					{count}
				</span>
				<button
					className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'
					onClick={() => setCount((prev) => prev + 1)}
				>
					+
				</button>
			</div>
			<span className='w-[158px]'>${props.price * count}</span>
		</div>
	)
}

export default CartItem
