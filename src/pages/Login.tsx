import React from 'react'
import bg from '@/assets/mainPhoto.jpg'
import { Link } from 'react-router-dom'

const Login: React.FC = (): JSX.Element => {
	return (
		<main className='w-full flex items-center relative'>
			<Link
				className='text-[20px] leading-[30px] text-aqua hover:underline hover:text-aquaBright absolute top-[20px] right-[30px]'
				to='/'
			>
				На главную
			</Link>
			<img
				className='w-[50%] h-screen object-cover object-top'
				src={bg}
				alt=''
			/>
			<div className='w-[50%] flex flex-col gap-[170px] items-center justify-center'>
				<div className='flex flex-col gap-[90px]'>
					<h2 className='text-[50px] leading-[30px]'>Вход в аккаунт</h2>
					<form className='flex flex-col items-center gap-[50px]'>
						<label className='flex flex-col gap-[50px]'>
							<input
								className='h-[40px] pl-2 border-2 border-black text-[20px] leading-[30px] rounded-xl'
								type='email'
								placeholder='E-mail'
							/>
							<input
								className='h-[40px] pl-2 border-2 border-black text-[20px] leading-[30px] rounded-xl'
								type='password'
								placeholder='Пароль'
							/>
						</label>
						<button
							className='w-[180px] h-[50px] bg-aqua text-white hover:bg-aquaBright'
							type='submit'
						>
							Войти
						</button>
					</form>
				</div>
				<div className='flex items-center gap-[10px] text-[17px] leading-[24px]'>
					<p>Еще нет аккаунта?</p>
					<Link className='text-aqua hover:underline' to='/register'>
						Зарегистрироваться
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Login
