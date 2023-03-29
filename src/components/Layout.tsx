import About from '@/pages/About'
import Contacts from '@/pages/Contacts'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Shop from '@/pages/Shop'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout: React.FC = (): JSX.Element => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default Layout
