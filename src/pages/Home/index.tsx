import React from 'react'
import Collections from './sections/Collections'
import Offer from './sections/Offer'

const Home: React.FC = (): JSX.Element => {
	return (
		<main>
			<Offer />
			<Collections />
		</main>
	)
}

export default Home
