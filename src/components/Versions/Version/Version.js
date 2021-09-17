import React from 'react'
import styles from './Version.module.scss'


export default function Version({ photo, price }) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.photo} src={photo} alt='version' />
			<div className={styles.content}>
				<h2 className={styles.title}>Bambusowe Naczynia<br /> dla Dzieci Ambition Junior Alex</h2>
				<p className={styles.availability}>
					<img src='./assets/icons/Ellipse 25.svg' alt='green-dot' />
					<span>Dostępny 3 szt.</span>
				</p>
				<p className={styles.price}>{price.toFixed(2).replace('.', ',')} zł / szt.</p>
				<div className={styles.form}>
					<input className={styles.quantity} type='text' defaultValue='1' />
					<button>DO KOSZYKA</button>
				</div>
			</div>
		</div>
	)
}
