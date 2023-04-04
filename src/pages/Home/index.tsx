import React from 'react'
import Collections from './sections/Collections'
import DreamTeam from './sections/DreamTeam'
import Features from './sections/Features'
import Offer from './sections/Offer'

const Home: React.FC = (): JSX.Element => {
	return (
		<main>
			<Offer />
			{/* <Collections /> */}
			<Features />
			<DreamTeam />
		</main>
	)
}

export default Home
