import React from 'react'
import styles from './Bestseller.module.scss'


export default function Bestseller({ img }) {
	return (
		<div className={styles.wrapper}>
			<a href='/' title='Przejdź do strony tego produktu'>
				<img src={img} alt='thumb' />
				<p>Bambusowe Naczynia dla Dzieci<br /> Ambition Junior Mimi</p>
				<p>129,00 zł</p>
			</a>
		</div>
	)
}
