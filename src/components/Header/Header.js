import React from 'react'
import styles from './Header.module.scss'


export default function Header() {
	return (
		<header className={styles.wrapper}>
			<div className={styles.content}>
				<img src='./assets/icons/logo.svg' alt='logo' className={styles.logo} />
				<div className={styles.search}>
					<input type="text" className={styles.searchInput} placeholder="Wpisz czego szukasz" />
					<i className='icon-search' />
				</div>
				<div className={styles.nav}>
					{/* mobile */}
					<i className='icon-search' />
					<i className='icon-shopping-cart' />
					<div className={styles.hamburger}>
						<div className={styles.hamburgerLine}></div>
						<div className={styles.hamburgerLine}></div>
						<div className={styles.hamburgerLine}></div>
					</div>

					{/* desktop */}
					<div className={styles.buttons}>
						<a href="/" className={styles.navBtn}>ZALOGUJ SIĘ</a>
						<a href="/" className={styles.navBtn}>LISTA ZAKUPOWA</a>
						<a href="/" className={styles.cartBtn}>
							<i className='icon-shopping-cart' />
							<span className={styles.value}>348,00 zł</span>
							<span className={styles.icon}>&gt;</span>
						</a>
					</div>
				</div>
			</div>	
			<nav className={styles.menu}>
				<span>DOM</span>
				<span>DZIECKO</span>
				<span>ELEKTRONIKA</span>
				<span>KUCHNIA</span>
				<span>PREZENT</span>
				<span>NARZĘDZIA I BHP</span>
				<span>WYPRZEDAŻ</span>
			</nav>
		</header>
	)
}
