import React from 'react'
import bg from '@/assets/dream-team-2.jpg'
import { Link } from 'react-router-dom'

const Register: React.FC = (): JSX.Element => {
	return (
		<main className='w-full flex items-center relative'>
			<Link
				className='text-[20px] leading-[30px] text-aqua hover:underline hover:text-aquaBright absolute top-[20px] left-[30px]'
				to='/'
			>
				На главную
			</Link>
			<div className='w-[50%] flex flex-col gap-[170px] items-center justify-center'>
				<div className='flex flex-col gap-[90px]'>
					<h2 className='text-[50px] leading-[30px]'>Регистрация</h2>
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
							Создать аккаунт
						</button>
					</form>
				</div>
				<div className='flex items-center gap-[10px] text-[17px] leading-[24px]'>
					<p>Уже есть аккаунт?</p>
					<Link className='text-aqua hover:underline' to='/login'>
						Войти
					</Link>
				</div>
			</div>
			<img
				className='w-[50%] h-screen object-cover object-top'
				src={bg}
				alt=''
			/>
		</main>
	)
}

export default Register
