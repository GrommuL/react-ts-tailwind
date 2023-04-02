import { IUser } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
	endpoints: (builder) => ({
		addUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: '/users/',
				method: 'POST',
				body: user
			})
		}),
		signInUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: 'login',
				method: 'POST',
				body: user
			})
		})
	})
})

export const { useAddUserMutation, useSignInUserMutation } = userApi
