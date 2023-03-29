import React from 'react'
interface IFeatureItemProps {
	icon: JSX.Element
	title: string
	description: string
}

const FeatureItem: React.FC<IFeatureItemProps> = (props): JSX.Element => {
	return (
		<div className='flex flex-col gap-[37px]'>
			{props.icon}
			<div className='w-[305px] flex flex-col gap-[24px]'>
				<span className='font-medium text-[25px] leading-[35px]'>
					{props.title}
				</span>
				<span className='font-medium text-[17px] leading-[24px]'>
					{props.description}
				</span>
			</div>
		</div>
	)
}

export default FeatureItem
