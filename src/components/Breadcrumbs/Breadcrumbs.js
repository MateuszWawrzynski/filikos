import React from 'react'
import styles from './Breadcrumbs.module.scss'


export default function Breadcrumbs() {
	return (
		<nav className={styles.wrapper}>
			<div className={styles.backwards}>
				<span className={styles.icon}>&lt;</span>
				<span>Wstecz</span>
			</div>		
			<p className={styles.location}>
				Jesteś tutaj: 
				<span className={styles.category}>Czujki ruchu alarmowe</span>
				<span className={styles.icon}>&gt;</span>
				<span>Wynik</span>
			</p>
			<div className={styles.desktop}>
				<a href='/'>Strona główna</a>
				<span>/</span>
				<a href='/'>Dziecko</a>
				<span>/</span>
				<a href='/'>Zastawa stołowa</a>
				<span>/</span>
				<a href='/'>Bambusowe naczynia dla dzieci</a>
			</div>
		</nav>
	)
}
