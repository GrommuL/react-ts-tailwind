import { IParams, IProductItem } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'clothes',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://womazingbackend.onrender.com'
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<IProductItem[], IParams>({
			query: ({ filter, sort, searchValue }) =>
				`clothes?${
					filter !== 'all' ? `category=${filter}&` : ''
				}&_sort=${sort}&q=${searchValue}&`
		}),
		getProductsInHomePage: builder.query<IProductItem[], IParams>({
			query: ({ limit }) => `clothes?_limit=${limit}`
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

export const {
	useGetProductsQuery,
	useGetOneProductQuery,
	useGetProductsInHomePageQuery
} = productApi
