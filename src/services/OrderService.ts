import { IOrder, IUser } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
	reducerPath: 'orders',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080'
	}),
	endpoints: (builder) => ({
		addOrderToUser: builder.mutation<IUser, IUser>({
			query: (order) => ({
				url: `/users/${order.id}`,
				method: 'PATCH',
				body: order
			})
		}),
		addOrderToOrders: builder.mutation<IOrder, IOrder>({
			query: (order) => ({
				url: `/orders/`,
				method: 'POST',
				body: order
			})
		})
	})
})

export const { useAddOrderToUserMutation, useAddOrderToOrdersMutation } =
	orderApi
