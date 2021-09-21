import React, { useState } from 'react'
import styles from './Faq.module.scss'

import useDesktopView from '../../hooks/useDesktopView'


export default function Faq({ title }) {
	const desktopMode = useDesktopView()

	const [ open, setOpen ] = useState(false)
	const handleClick = e => {
		setOpen(prevState => !prevState)
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
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
					Hello World!<br />
				</div>
			)}
		</div>
	)
}
