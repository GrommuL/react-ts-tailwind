import FeatureItem from '@/components/FeatureItem'
import QualityIcon from '@/components/icons/QualityIcon'
import ResponsibilityIcon from '@/components/icons/ResponsibilityIcon'
import SpeedIcon from '@/components/icons/SpeedIcon'
import React from 'react'

const Features: React.FC = (): JSX.Element => {
	return (
		<section className='mb-[130px]'>
			<div className='container'>
				<div className='sectionBlock'>
					<h3 className='sectionTitle'>Что для нас важно</h3>
					<div className='flex items-center gap-[75px]'>
						<FeatureItem
							icon={<QualityIcon />}
							title={'Качество'}
							description={
								'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества'
							}
						/>
						<FeatureItem
							icon={<SpeedIcon />}
							title={'Скорость'}
							description={
								'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах'
							}
						/>
						<FeatureItem
							icon={<ResponsibilityIcon />}
							title={'Ответственность'}
							description={
								'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
