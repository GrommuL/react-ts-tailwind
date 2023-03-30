import React from 'react'
import notFound from '@/assets/404.png'
import { Link } from 'react-router-dom'

const NotFound: React.FC = (): JSX.Element => {
	return (
		<main className='mb-[130px]'>
			<div className='container'>
				<section className='flex flex-col gap-[100px] items-center justify-center'>
					<img src={notFound} alt='' />
					<p className='w-[400px] text-[25px] leading-[30px] text-center'>
						Извините,но такой страницы не существует!
					</p>
					<Link
						className='text-[17px] leading-[24px] flex items-center justify-center py-[22px] px-[50px] bg-aqua text-white hover:bg-aquaBright'
						to='/'
					>
						Вернуться на главную
					</Link>
				</section>
			</div>
		</main>
	)
}

export default NotFound
