import { Route, Routes, useLocation } from 'react-router-dom'
import About from '@/pages/About'
import Contacts from '@/pages/Contacts'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Shop from '@/pages/Shop'
import Cart from '@/pages/Cart'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Ordering from '@/pages/Ordering'
import SuccessOrder from '@/pages/SuccessOrder'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const Layout: React.FC = (): JSX.Element => {
	const location = useLocation()
	return (
		<>
			{location.pathname !== '/login' && location.pathname !== '/register' ? (
				<Header />
			) : (
				''
			)}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/ordering' element={<Ordering />} />
				<Route path='/ordering/success' element={<SuccessOrder />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' ? (
				<Footer />
			) : (
				''
			)}
		</>
	)
}

export default Layout
