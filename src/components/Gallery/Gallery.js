import React from 'react'
import styles from './Gallery.module.scss'


export default function Gallery() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.thumbs}>
				<img src='./assets/photos/thumb-1.png' alt='thumb' />
				<img src='./assets/photos/thumb-2.png' alt='thumb' />
				<img src='./assets/photos/thumb-3.png' alt='thumb' />
				<img src='./assets/photos/thumb-4.png' alt='thumb' />
				<div className={styles.more}>
					<span>+3</span><br />
					<span>zdjęcia</span>
				</div>
			</div>
			<img className={styles.photo} src='./assets/photos/photo_1.png' alt='gallery' />
			<span className={styles.bestseller}>BESTSELLER</span>
		</div>
	)
}
