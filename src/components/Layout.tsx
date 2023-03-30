import { Route, Routes } from 'react-router-dom'
import About from '@/pages/About'
import Contacts from '@/pages/Contacts'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Shop from '@/pages/Shop'
import Cart from '@/pages/Cart'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = (): JSX.Element => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default Layout
