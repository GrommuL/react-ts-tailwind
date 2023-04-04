import { IProductItem } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IParams {
	filter?: string
	limit?: number
	id?: string
}
export const productApi = createApi({
	reducerPath: 'clothes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080'
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<IProductItem[], IParams>({
			query: ({ filter, limit }) =>
				`clothes?${filter !== 'all' ? `category=${filter}&` : ''}limit=${limit}`
		}),
		getOneProduct: builder.query<IProductItem, any>({
			query: (id) => ({
				url: `clothes/${id}`,
				params: {
					id
				}
			})
		})
	})
})

export const { useGetProductsQuery, useGetOneProductQuery } = productApi
