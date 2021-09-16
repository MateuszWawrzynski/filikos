import React from 'react'
import styles from './BuyForm.module.scss'


export default function BuyForm() {
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
					<img className={styles.active} src='./assets/icons/Ellipse 13.svg' alt='version-red' />
					<img src='./assets/icons/Ellipse 17.svg' alt='version-gray' />
					<img src='./assets/icons/Ellipse 19.svg' alt='version-blue' />
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
				<span className={styles.label}>PROMOCJA</span>
				<a className={styles.instalments} href='/'>Kup na raty</a>
			</div>
			<div className={styles.purchase}>
				<a className={styles.instalments} href='/'>Kup na raty</a>
				<div className={styles.form}>
					<input className={styles.quantity} type='text' defaultValue='1' />
					<button>DODAJ OD KOSZYKA</button>
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
