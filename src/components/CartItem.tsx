import React from 'react'
import CloseIcon from './icons/CloseIcon'

const CartItem: React.FC = (): JSX.Element => {
	return (
		<div className='flex items-center'>
			<div className='flex items-center gap-[45px] w-[471px]'>
				<button>
					<CloseIcon />
				</button>
				<div className='flex items-center gap-[36px]'>
					<img className='w-[125px] h-[179px]' src='/tshirt.jpg' alt='' />
					<p className='text-[17px] leading-[24px]'>Футболка USA</p>
				</div>
			</div>
			<span className='w-[190px] text-[17px] leading-[24px]'>$129</span>
			<div className='w-[285px] flex items-center gap-[5px]'>
				<button className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'>
					-
				</button>
				<span className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px]'>
					1
				</span>
				<button className='w-[47px] h-[47px] border border-black flex items-center justify-center text-[20px] leading-[28px] hover:bg-black hover:text-white'>
					+
				</button>
			</div>
			<span className='w-[158px]'>$129</span>
		</div>
	)
}

export default CartItem
