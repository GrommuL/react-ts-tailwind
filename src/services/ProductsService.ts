import { IParams, IProductItem } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'clothes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080'
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<IProductItem[], IParams>({
			query: ({ filter, limit, sort }) =>
				`clothes?${
					filter !== 'all' ? `category=${filter}&` : ''
				}_limit=${limit}&_sort=${sort}`
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
