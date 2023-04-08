export interface IUser {
	email: string
	password: string
	orders?: IProductItem[]
}

export interface IRegisterFormInput {
	email: string
	password: string
}

export interface IProductItem {
	id?: number
	title: string
	price: number
	image: string
	category: string
	size: string[]
	colors: string[]
	inStock: number
	count: number
	selectedSize?: string
}
