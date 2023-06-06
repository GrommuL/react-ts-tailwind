import React from 'react'
import bg from '@/assets/mainPhoto.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegisterFormInput } from '@/types'
import { useAppDispatch } from '@/utils/hooks/redux'
import { loginUser } from '@/store/slices/userSlice'
import { useSignInUserMutation } from '@/services/UserService'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Login: React.FC = (): JSX.Element => {
	const [signInUser] = useSignInUserMutation()
	const navigate = useNavigate()
	const { register, handleSubmit, reset } = useForm<IRegisterFormInput>()
	const dispatch = useAppDispatch()
	const onSubmitLogin: SubmitHandler<IRegisterFormInput> = (data) => {
		try {
			signInUser(data)
			dispatch(loginUser({ ...data }))
			reset()
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}
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
					<form
						className='flex flex-col items-center gap-[50px]'
						onSubmit={handleSubmit(onSubmitLogin)}
					>
						<label className='flex flex-col gap-[50px]'>
							<input
								{...register('email')}
								className='h-[40px] pl-2 border-2 border-black text-[20px] leading-[30px] rounded-xl'
								type='email'
								placeholder='E-mail'
							/>
							<input
								{...register('password')}
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
