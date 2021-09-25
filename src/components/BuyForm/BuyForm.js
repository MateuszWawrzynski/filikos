import React from 'react'
import styles from './BuyForm.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function BuyForm() {
	const desktopMode = useDesktopView()
	
	const handleVersionSelect = e => {
		document.querySelectorAll(`.${styles.options} img`)
		.forEach(item => {
			item.classList.remove(styles.active)
		})
		e.target.classList.add(styles.active)
	}

	const handleButtonClick = e => {
		const d = document.querySelector(`.${styles.form} > button`)
		d.classList.add(styles.animate)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>
					<h1>Bambusowe Naczynia<br /> dla Dzieci Ambition Junior Alex</h1>
					<small className={styles.id}>5904134571342</small>
				</div>
				<img className={styles.creator} src='./assets/icons/Image 1.svg' alt='creator-logo' />
			</div>
			<div className={styles.colors}>
				<h2>Kolory</h2>
				<div className={styles.options}>
					<img className={styles.active} src='./assets/icons/Ellipse 13.svg' alt='version-red' onClick={handleVersionSelect} />
					<img src='./assets/icons/Ellipse 17.svg' alt='version-gray' onClick={handleVersionSelect} />
					<img src='./assets/icons/Ellipse 19.svg' alt='version-blue' onClick={handleVersionSelect} />
				</div>
			</div>
			<div className={styles.availability}>
				<p>Dostępny 3 szt na magazynie</p>
				<a href='/'>Sprawdź czas i koszt dostawy</a>
			</div>
			<div className={styles.price}>
				<span className={styles.value}>
					29,00 <span>zł / szt.</span>
				</span>
				<span className={styles.discount}>39,00 zł</span>
				<span className={styles.label} title='Ten produkt został przeceniony!'>PROMOCJA</span>
				{desktopMode && (
					<a className={styles.instalments} href='/'>Kup na raty</a>
				)}
			</div>
			<div className={styles.purchase}>
				{!desktopMode && (
					<a className={styles.instalments} href='/'>Kup na raty</a>
				)}
				<div className={styles.form}>
					<input className={styles.quantity} type='number' defaultValue='1' />
					<button onClick={handleButtonClick} title='Dodaj ten produkt do koszyka'>DODAJ OD KOSZYKA</button>
				</div>
				<a className={styles.saveLater} href='/'>Do listy zakupowej</a>
			</div>
			<ul className={styles.info}>
				<li>
					<i className='icon-group-4320'></i>
					<p><strong>Łatwy zwrot towaru</strong> w ciągu 14 dni</p>
				</li>
				<li>
					<i className='icon-box-(2)'>&nbsp;</i>
					<p><strong>Darmowa dostawa</strong> od 599 zł</p>
				</li>
				<li>
					<i className='icon-shipped-(2)'></i>
					<p><strong>Szybka dostawa w 48h</strong></p>
				</li>
			</ul>
		</div>
	)
}
