import React from 'react'
import styles from './Footer.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function Footer() {
	const desktopMode = useDesktopView()

	const handleOpen = e => {
		if(e.target.dataset.open === 'false') e.target.dataset.open = 'true'
		else e.target.dataset.open = 'false'
		
		// if(e.target.dataset.open === 'true') {
		// 	e.target.dataset.open = 'false'
		// } else {
		// 	document.querySelectorAll(`.${styles.title}`).forEach(item => item.dataset.open = 'false')
		// 	e.target.dataset.open = 'true'
		// }
	}

	return (
		<footer className={styles.wrapper}>
			<div className={styles.menu}>
				<div className={styles.section}>
					<h1 className={styles.title} data-open='true' onClick={handleOpen}>Moje zamówienie</h1>
					<div className={styles.links}>
						<p><i className='icon-battery-level' /><a href='/'>Status zamówienia</a></p>
						<p><i className='icon-truck' /><a href='/'>Śledzenie przesyłki</a></p>
						<p><i className='icon-sad' /><a href='/'>Chcę zareklamować towar</a></p>
						<p><i className='icon-dollar-symbol' /><a href='/'>Chcę zwrócić towar</a></p>
						<p><i className='icon-box-2' /><a href='/'>Chcę wymienić towar</a></p>
					</div>
				</div>
				<div className={styles.section}>
					<h1 className={styles.title} data-open='false' onClick={handleOpen}>Moje konto</h1>
					<div className={styles.links}>
						<p><i className='icon-register' /><a href='/'>Zarejestruj się</a></p>
						<p><i className='icon-menu' /><a href='/'>Moje zamówienia</a></p>
						<p><i className='icon-basket' /><a href='/'>Koszyk</a></p>
						<p><i className='icon-star' /><a href='/'>Ulubione</a></p>
						<p><i className='icon-clock' /><a href='/'>Historia transakcji</a></p>
						<p><i className='icon-cut' /><a href='/'>Moje rabaty</a></p>
						<p><i className='icon-mail' /><a href='/'>Newsletter</a></p>
					</div>
				</div>
				<div className={styles.section}>
					<h1 className={styles.title} data-open='false' onClick={handleOpen}>Regulaminy</h1>
					<div className={styles.links}>
						<p><a href='/'>Informacje o sklepie</a></p>
						<p><a href='/'>Wysyłka</a></p>
						<p><a href='/'>Sposoby płatności i prowizji</a></p>
						<p><a href='/'>Regulamin</a></p>
						<p><a href='/'>Polityka prywatności</a></p>
						<p><a href='/'>Odstąpienie od umowy</a></p>
					</div>
				</div>
				<div className={styles.section}>
					<h1 className={styles.title}>Informacje</h1>
					<div className={styles.info}>
						<div>
							<a href='/' title='Przejdź do naszego profilu Facebook'><i className='icon-facebook-circular-logo-(2)'></i></a>
							<a href='/' title='Przejdź do naszego profilu Instgram'><i className='icon-instagram-(7)'></i></a>
						</div>
						<div className={styles.contact}>
							<h2><a href='callto:'>575848808</a></h2>
							<h2><a href='mailto:'>sklep@filikos.pl</a></h2>
							<p>pn-pt 8.00-16.00</p>
							<p>sb 8:00-14:00</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.services}>
				<div className={styles.banks}>
					<a href='/'><img src='./assets/icons/banks/alior-bank.svg' alt='logo-alior-bank' /></a>
					<a href='/'><img src='./assets/icons/banks/inteligo.svg' alt='logo-inteligo' /></a>
					<a href='/'><img src='./assets/icons/banks/bank-pekao.svg' alt='logo-bank-pekao' /></a>
					<a href='/'><img src='./assets/icons/banks/ipko.svg' alt='logo-ipko' /></a>
					<a href='/'><img src='./assets/icons/banks/millennium.svg' alt='logo-millennium' /></a>
					<a href='/'><img src='./assets/icons/banks/citi-handlowy.svg' alt='logo-citi-handlowy' /></a>
					<a href='/'><img src='./assets/icons/banks/mbank.svg' alt='logo-mbank' /></a>
					<a href='/'><img src='./assets/icons/banks/ing.svg' alt='logo-ing' /></a>
				</div>
				<div className={styles.banner}>
					{desktopMode && (<>
						<p>Filikos , al. Kwiatowa 30, 71-065 Szczecin</p>
						<div className={styles.line}></div>
					</>)}
					<img src='./assets/icons/powered_by_IdoSell_black.svg' alt='idosell' />
				</div>
			</div>
		</footer>
	)
}
