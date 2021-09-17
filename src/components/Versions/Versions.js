import React from 'react'
import styles from './Versions.module.scss'

import Version from './Version/Version'


export default function Versions() {
	return (
		<div className={styles.wrapper}>
			<h1>Dostępne warianty</h1>
			<div className={styles.versions}>
				<Version photo='./assets/photos/version-1.png' price={29} />
				<Version photo='./assets/photos/version-2.png' price={49} />
				<Version photo='./assets/photos/version-3.png' price={79} />
			</div>
		</div>
	)
}
