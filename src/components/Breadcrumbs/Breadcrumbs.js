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
		</nav>
	)
}
