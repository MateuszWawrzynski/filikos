import React from 'react'
import styles from './Comment.module.scss'


export default function Comment({ data: { rate, text, date, authorName, city, vote }}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.rating}>
				{/* https://stackoverflow.com/a/68029192/14536846 */}
				{Array.from({ length: rate }, (_, i) => <i key={i} className='icon-star' />)}
				{Array.from({ length: 5-rate }, (_, i) => <i key={i} className='icon-star' style={{color: 'gray'}} />)}
				<span>{rate}/5</span>
			</div>
			<p className={styles.text}>{text}</p>
			<div className={styles.info}>
				<p className={styles.author}>{`${date} ${authorName}, ${city}`}</p>
				<p className={styles.vote}>
					Czy ta opinia była pomocna?
					<span><i className='icon-thumbs-up-alt' /> Tak ({vote.likes})</span>
					<span><i className='icon-thumbs-down' /> Nie ({vote.dislikes})</span>
				</p>
			</div>
		</div>
	)
}
