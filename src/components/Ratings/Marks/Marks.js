import React from 'react'
import styles from './Marks.module.scss'


export default function Marks({ data: { marks, combined }}) {
	return (
		<aside className={styles.wrapper}>
			<div className={styles.rating}>
				<i className='icon-star' />
				<i className='icon-star' />
				<i className='icon-star' />
				<i className='icon-star' />
				<i className='icon-star' />
				<span>{((5 * marks[5] + 4 * marks[4] + 3 * marks[3] + 2 * marks[2] + 1 * marks[1]) / combined).toFixed(1)}</span>
				{/* <span>4.5</span> */}
			</div>
			<p className={styles.ratingsCounter}>Liczba wystawionych opinii: {combined}</p>
			{/* <p className={styles.ratingsCounter}>Liczba wystawionych opinii: 3</p> */}
			<button>DODAJ SWOJĄ OPINIĘ</button>
			<div>
				<div className={styles.mark}>
					<span>5</span>
					<i className='icon-star' />
					<div className={styles.progressBar}>
						<div style={{width: `${marks[5]/combined*100}%`}}></div>
					</div>
					<span>({marks[5]})</span>
				</div>
				<div className={styles.mark}>
					<span>4</span>
					<i className='icon-star' />
					<div className={styles.progressBar}>
						<div style={{width: `${marks[4]/combined*100}%`}}></div>
					</div>
					<span>({marks[4]})</span>
				</div>
				<div className={styles.mark}>
					<span>3</span>
					<i className='icon-star' />
					<div className={styles.progressBar}>
						<div style={{width: `${marks[3]/combined*100}%`}}></div>
					</div>
					<span>({marks[3]})</span>
				</div>
				<div className={styles.mark}>
					<span>2</span>
					<i className='icon-star' />
					<div className={styles.progressBar}>
						<div style={{width: `${marks[2]/combined*100}%`}}></div>
					</div>
					<span>({marks[2]})</span>
				</div>
				<div className={styles.mark}>
					<span>1</span>
					<i className='icon-star' />
					<div className={styles.progressBar}>
						<div style={{width: `${marks[1]/combined*100}%`}}></div>
					</div>
					<span>({marks[1]})</span>
				</div>
			</div>
			<p className={styles.info}>Kliknij ocenę, aby filtrować opinie</p>
		</aside>
	)
}
