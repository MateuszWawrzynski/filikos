import React from 'react'
import styles from './Header.module.scss'


export default function Header() {
	return (
		<header className={styles.wrapper}>
			<img src='./assets/icons/logo.svg' alt='logo' className={styles.logo} />
			<div className={styles.nav}>
				<i className='icon-search' />
				<i className='icon-shopping-cart' />
				<div className={styles.hamburger}>
					<div className={styles.hamburgerLine}></div>
					<div className={styles.hamburgerLine}></div>
					<div className={styles.hamburgerLine}></div>
				</div>
			</div>
		</header>
	)
}
