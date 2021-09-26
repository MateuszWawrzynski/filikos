import React, { useState } from 'react'
import styles from './Ratings.module.scss'

import useDesktopView from '../../hooks/useDesktopView'

import Marks from './Marks/Marks'
import Comment from './Comment/Comment'


export default function Ratings({ title }) {
	const desktopMode = useDesktopView()

	const [ open, setOpen ] = useState(false)
	const handleClick = e => {
		setOpen(prevState => !prevState)
	}

	const mockRatings = {
		marks: {
			1: 1,
			2: 0,
			3: 0,
			4: 5,
			5: 21
		},
		combined: 27
	}

	const mockComments = [
		{
			id: 0,
			rate: 5,
			text: "Towar zgodny z opisem. Szybka wysyłka. Gorąco polecam.",
			date: "22.01.2020",
			authorName: "Wera",
			city: "Szczecin, Polska",
			vote: {
				likes: 3,
				dislikes: 0
			}
		},
		{
			id: 1,
			rate: 5,
			text: "Wszystko w porządku, porządny opis, długa gwarancja utwierdziły mnie w podjęciu decyzji o zakupie tutaj. Polecam!",
			date: "23.05.2020",
			authorName: "Bartłomiej",
			city: "Opole, Polska",
			vote: {
				likes: 3,
				dislikes: 0
			}
		},
		{
			id: 2,
			rate: 5,
			text: "Całkiem sprawna wysyłka, towar szybko dostałem pod drzwi, polecam.",
			date: "22.04.2020",
			authorName: "Ola",
			city: "Mazowsze Wlkp., Polska",
			vote: {
				likes: 3,
				dislikes: 0
			}
		}
	]
	
	return (
		<section className={styles.wrapper}>
			{!desktopMode ? (
				<div className={styles.banner} onClick={handleClick}>
					<h1>{title}</h1>
					<span>{open ? '-' : '+'}</span>
				</div>
			) : (
				<h1 className={styles.header}>{title}</h1>
			)}	
			{(open || desktopMode) && (
				<div className={styles.content}>
					<Marks data={mockRatings} />
					<div className={styles.comments}>
						{mockComments.map(item => {
							return <Comment key={item.id} data={item} />
						})}
					</div>
				</div>
			)}
		</section>
	)
}
