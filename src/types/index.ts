export interface IUser {
	id?: number
	email: string
	password: string
}

export interface IParams {
	searchValue?: string
	sort?: string
	filter?: string
	limit?: number
	id?: string
}

export interface IRegisterFormInput {
	email: string
	password: string
}

export interface IOrderInformation {
	name: string
	email: string
	tel: string
	country: string
	city: string
	street: string
	house: string
	appartment: string
	comment: string
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
	totalPrice: number
	selectedSize?: string
}

export interface IOrder {
	name: string
	email: string
	tel: string
	country: string
	city: string
	street: string
	house: string
	appartment: string
	comment: string
	order: IProductItem[]
	user: IUser
}
