import React, { useState } from 'react'
import styles from './Faq.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function Faq({ title }) {
	const desktopMode = useDesktopView()

	const [ open, setOpen ] = useState(false)
	const handleClick = e => {
		setOpen(prevState => !prevState)
	}

	const handleOpenAnswer = e => {
		// i don't know why i couldn't operate on booleans, but it doesn't work
		// e.target.dataset.open = !e.target.dataset.open

		if(e.target.dataset.open === 'false') e.target.dataset.open = 'true'
		else e.target.dataset.open = 'false'
	}
	
	return (
		<div className={styles.wrapper}>
			{!desktopMode ? (
				<div className={styles.banner} onClick={handleClick}>
					<h1>{title}</h1>
					<span>{open ? '-' : '+'}</span>
				</div>
			) : (
				<h1 className={styles.header}>{title}</h1>
			)}	
			{open && (
				<div className={styles.content}>
					<div>
						<div className={styles.question} data-open='false' onClick={handleOpenAnswer}>
							<h2>Czy te miseczki mają atesty bezpieczeństwa?</h2>
							<p>Tak, jest bardzo wytrzymałe. W codziennym użytkowaniu, nie powinno się nic zdarzyć i wszelkiego rodzaju ocierki nie pozostawią głębokich rys na płytce</p>
						</div>
						<div className={styles.question} data-open='false'  onClick={handleOpenAnswer}>
							<h2>Czy te produkty są w 100% ekologiczne?</h2>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam dignissimos perspiciatis voluptatum doloremque modi. Voluptates unde fugiat</p>
						</div>
						<div className={styles.question} data-open='false'  onClick={handleOpenAnswer}>
							<h2>Czy miseczki nie uczulą 6 miesięcznego dziecka?</h2>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam dignissimos perspiciatis voluptatum doloremque modi. Voluptates unde fugiat</p>
						</div>
					</div>
					<div className={styles.more}>
						<h1>Masz pytanie na temat tego produktu?</h1>
						<h3>Nasi specjaliści chętnie udzielą Ci potrzebnych informacji.</h3>
						<button>ZADAJ PYTANIE</button>
						<i className='icon-question' />
					</div>
				</div>
			)}
		</div>
	)
}
