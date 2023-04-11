import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = (): JSX.Element => {
	return (
		<ContentLoader
			speed={2}
			width={350}
			height={430}
			viewBox='0 0 350 430'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='0' ry='0' width='350' height='350' />
			<rect x='108' y='400' rx='7' ry='7' width='100' height='21' />
			<rect x='16' y='363' rx='10' ry='10' width='300' height='28' />
		</ContentLoader>
	)
}

export default Skeleton
