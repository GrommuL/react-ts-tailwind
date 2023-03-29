interface INavigationList {
	nameLink: string
	path: string
}

export const navigationList: INavigationList[] = [
	{
		nameLink: 'Главная',
		path: '/'
	},
	{
		nameLink: 'Магазин',
		path: '/shop'
	},
	{
		nameLink: 'О бренде',
		path: '/about'
	},
	{
		nameLink: 'Контакты',
		path: '/contacts'
	}
]
