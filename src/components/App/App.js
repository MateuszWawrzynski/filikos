import React from 'react';
import styles from './App.module.scss'

import useDesktopView from '../../hooks/useDesktopView';

import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Gallery from '../Gallery/Gallery';
import BuyForm from '../BuyForm/BuyForm';
import Versions from '../Versions/Versions';
import Description from '../Description/Description';
import Bestsellers from '../Bestsellers/Bestsellers';
import FaqMobile from '../Faq/Mobile/FaqMobile';
import FaqDesktop from '../Faq/Desktop/FaqDesktop';


function App() {
	const desktopMode = useDesktopView()

	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
			<div className={styles.productArea}>
				<Gallery />
				<BuyForm />
				<Versions />
			</div>
			<Description />
			<Bestsellers titleShort='Bestsellery' titleLong='Zobacz podobne' />
			{!desktopMode ? (
				<div>
					<FaqMobile title='Nasi klienci najczęściej pytali o:'>
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
					</FaqMobile>
					<FaqMobile title='Opinie o miseczka bambusowa myszka dla dzieci'>
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
					</FaqMobile>
				</div>
			) : (
				<FaqDesktop />
			)}
		</div>
	);
}


export default App;
