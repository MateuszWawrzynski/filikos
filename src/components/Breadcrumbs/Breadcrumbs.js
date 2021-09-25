import React from 'react'
import styles from './Breadcrumbs.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function Breadcrumbs() {
	const desktopMode = useDesktopView()
	
	return (
		<nav className={styles.wrapper}>
			{!desktopMode ? (<>
				<a href='/' className={styles.backwards}>
					<span className={styles.icon}>&lt;</span>
					<span>Wstecz</span>
				</a>		
				<p className={styles.location}>
					Jesteś tutaj: 
					<span className={styles.category}>Czujki ruchu alarmowe</span>
					<span className={styles.icon}>&gt;</span>
					<span>Wynik</span>
				</p>
			</>) : (
				<div className={styles.desktop}>
					<a href='/' title='Wróć na stronę główną'>Strona główna</a>
					<span>/</span>
					<a href='/' title='Wróć do kategorii "Dziecko"'>Dziecko</a>
					<span>/</span>
					<a href='/' title='Wróć do kategorii "Zastawa stołowa"'>Zastawa stołowa</a>
					<span>/</span>
					<a href='/' title='Wróć do kategorii "Bambusowe naczynia dla dzieci"'>Bambusowe naczynia dla dzieci</a>
				</div>
			)}
		</nav>
	)
}
