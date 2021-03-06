import React from 'react';
import styles from './App.module.scss'

import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Gallery from '../Gallery/Gallery';
import BuyForm from '../BuyForm/BuyForm';
import Versions from '../Versions/Versions';
import Description from '../Description/Description';
import Bestsellers from '../Bestsellers/Bestsellers';
import Faq from '../Faq/Faq';
import Ratings from '../Ratings/Ratings';
import Footer from '../Footer/Footer';


function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
			<main>
				<div className={styles.productArea}>
					<Gallery />
					<BuyForm />
					<Versions />
				</div>
				<Description />
			</main>
			<Bestsellers titleShort='Bestsellery' titleLong='Zobacz podobne' />
			<Faq title='Nasi klienci najczęściej pytali o:' />
			<Ratings title='Opinie o miseczka bambusowa myszka dla dzieci' />
			<Bestsellers titleShort='Bestsellery' titleLong='Przyda ci się również' second={true} />
			<Footer />
		</div>
	);
}


export default App;
