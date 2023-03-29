/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,css,scss,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: true
			},
			colors: {
				black: '#000000',
				white: '#ffffff',
				aqua: '#6E9C9F',
				aquaHover: 'rgba(110, 156, 159, 0.64)',
				aquaLight: 'rgba(110, 156, 159, 0.1)',
				grey: '#D5D5D5',
				greyLight: '#D1D1D1',
				linen: '#F1EADC',
				gold: '#998E78',
				pinkDark: '#927876',
				pink: '#FD9696',
				yellow: '#FDC796'
			}
		}
	},
	plugins: []
}
