import React from 'react'
import bg from '@/assets/dream-team-2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IUser } from '@/types'
import { useAppDispatch } from '@/utils/hooks/redux'
import { addUser } from '@/store/slices/userSlice'
import { useAddUserMutation } from '@/services/UserService'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Register: React.FC = (): JSX.Element => {
	const navigate = useNavigate()
	const [createUser] = useAddUserMutation()
	const dispatch = useAppDispatch()
	const { register, handleSubmit, reset } = useForm<IUser>()
	const onSubmit: SubmitHandler<IUser> = (data) => {
		try {
			createUser(data)
			dispatch(addUser(data))
			reset()
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

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
					<form
						className='flex flex-col items-center gap-[50px]'
						onSubmit={handleSubmit(onSubmit)}
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
