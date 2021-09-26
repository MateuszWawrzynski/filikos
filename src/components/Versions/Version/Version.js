import React from 'react'
import styles from './Version.module.scss'


export default function Version({ photo, price }) {
	const handleButtonClick = e => {
		e.target.classList.add(styles.animate)
		setTimeout(() => e.target.classList.remove(styles.animate), 1000)
	}
	
	return (
		<article className={styles.wrapper}>
			<img className={styles.photo} src={photo} alt='version' />
			<div className={styles.content}>
				<h2 className={styles.title}>Bambusowe Naczynia<br /> dla Dzieci Ambition Junior Alex</h2>
				<p className={styles.availability}>
					<img src='./assets/icons/Ellipse 25.svg' alt='green-dot' />
					<span>Dostępny 3 szt.</span>
				</p>
				<p className={styles.price}>{price.toFixed(2).replace('.', ',')} zł / szt.</p>
				<div className={styles.form}>
					<input className={styles.quantity} type='number' defaultValue='1' />
					<button onClick={handleButtonClick} title='Dodaj ten produkt do koszyka'>DO KOSZYKA</button>
				</div>
			</div>
		</article>
	)
}
