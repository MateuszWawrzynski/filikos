import React from 'react'
import styles from './Gallery.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function Gallery() {
	const desktopMode = useDesktopView()

	return (
		<div className={styles.wrapper}>
			{desktopMode && (<>
				<div className={styles.thumbs}>
					<img src='./assets/photos/thumb-1.png' alt='thumb' />
					<img src='./assets/photos/thumb-2.png' alt='thumb' />
					<img src='./assets/photos/thumb-3.png' alt='thumb' />
					<img src='./assets/photos/thumb-4.png' alt='thumb' />
					<div className={styles.more} title='Wyświetł pełną galerię produktu'>
						<span>+3</span><br />
						<span>zdjęcia</span>
					</div>
				</div>
				<span className={styles.bestseller}>BESTSELLER</span>
			</>)}
			<img className={styles.photo} src='./assets/photos/photo_1.png' alt='gallery' />	
		</div>
	)
}
