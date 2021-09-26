import React from 'react'
import styles from './Description.module.scss'


export default function Description() {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.header}>W zestawie kupisz taniej</h1>
			<article className={styles.combo}>			
				<div className={styles.comboImg}>
					<img src='./assets/photos/photo_3a.png' alt='combo-1' />
					<span>+</span>
					<img src='./assets/photos/photo_3b.png' alt='combo-2' />
				</div>
				<div className={styles.comboInfo}>
					<div className={styles.prices}>
						<p>Cena produktów poza zestawem 199,00 zł</p>
						<p>149,00 zł / zestaw</p>
					</div>
					<button>ZOBACZ OFERTĘ</button>
				</div>
			</article>
			<article className={styles.content}>
				<div className={styles.about}>
					{/* wrong img below - styling should be different */}
					<img className={styles.photo} src='./assets/photos/thumb-4.png' alt='main' />
					<div className={styles.description}>
						<h1 className={`${styles.header} ${styles.second}`}>Zestaw naczyń bambusowych dla dzieci Alex AMBITION JUNIOR</h1>
						<div className={styles.text}>
							<p>Funkcjonalne, rozbudzające wyobraźnię, wesołe i kolorowe naczynia z kolekcji Mimi i Alex marki AMBITION zachęcą Twoje dziecko do samodzielnej nauki jedzenia. Wykonane z włókna bambusowego, które jest biodegradalne i ekologiczne oraz bezpieczne dla dzieci</p>
							<p>Produkt bezpieczny, dopuszczalny do kontaktu z żywnością. Nietuzinkowe wzornictwo produktów z kolekcji Mimi i Alex umilą chwile spędzone wspólnie przy stole.</p>
							<p>Naczynia nadają się do mycia w zmywarce. Nie należy używać w mikrofalówce i zamrażarce.</p>
							<p>W skład zestawu wchodzą 3 elementy:</p>
							<p>
								talerz: 21 cm<br />
								miska: 360 ml<br />
								kubek: 180 ml
							</p>
							<p>
								Kolor: odcienie brązowego, zielonego, kremowego<br />
								Oferowany zestaw zapakowany jest w elegancki karton, dzięki czemu doskonale nadaje się na prezent.<br />
								Produkt przeznaczony dla młodszych dzieci.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.parameters}>
					<h1 className={`${styles.header}`}>Specyfikacja</h1>
					<div className={styles.column}>
						<ul>
							<li>Producent:</li>
							<li>Gwarancja</li>
							<li>Przeznaczenie</li>
							<li>Wymiar</li>
							<li>Materiał</li>
							<li>Zużycie energii (w)</li>
							<li>Zasilanie</li>
							<li>Ilość trybów pracy</li>
							<li>Czujnik ruchu</li>
						</ul>
						<ul>
							<li><a href='/'>Ambition</a></li>
							<li>2 lata</li>
							<li>przedszkola, dzieci żłobkowe</li>
							<li>33m2 (aham cadr - 15m2)</li>
							<li>aluminium</li>
							<li>4-40</li>
							<li>230v/50hz</li>
							<li>4</li>
							<li>z czujnikiem</li>
						</ul>
					</div>
					<div className={styles.downloads}>
						<p>Pliki do pobrania:</p>
						<div className={styles.files}>
							<a href='/'><i className='icon-download' />Katalog producenta</a>
							<a href='/'><i className='icon-download' />Instrukcja obsługi</a>
						</div>
					</div>
				</div>
			</article>
		</section>
	)
}
