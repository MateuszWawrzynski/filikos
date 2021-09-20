import React from 'react'
import styles from './Bestsellers.module.scss'

import useDesktopView from '../../hooks/useDesktopView'

import Bestseller from './Bestseller/Bestseller'


export default function Bestsellers({ titleShort, titleLong }) {
	const desktopMode = useDesktopView()
	
	return (
		<div className={styles.wrapper}>
			{!desktopMode ? (
				<h1 className={styles.header}>{titleShort}</h1>
			) : (
				<h1 className={styles.header}>{titleLong}</h1>
			)}
			<div className={styles.content}>
				<Bestseller img='./assets/photos/hs_1.png' />
				<Bestseller img='./assets/photos/hs_2.png' />
				<Bestseller img='./assets/photos/hs_3.png' />
				<Bestseller img='./assets/photos/hs_4.png' />
			</div>
		</div>
	)
}
