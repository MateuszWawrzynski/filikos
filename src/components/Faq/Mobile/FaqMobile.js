import React, { useState } from 'react'
import styles from './FaqMobile.module.scss'


export default function Faq({ title, children }) {
	const [ open, setOpen ] = useState(false)
	const handleClick = e => {
		setOpen(prevState => !prevState)
	}
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.header} onClick={handleClick}>
				<h1>{title}</h1>
				<span>{open ? '-' : '+'}</span>
			</div>		
			{open && (
				<div className={styles.content}>
					{children}
				</div>
			)}
		</div>
	)
}
