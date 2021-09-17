import styles from './App.module.scss'

import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Gallery from '../Gallery/Gallery';
import BuyForm from '../BuyForm/BuyForm';
import Versions from '../Versions/Versions';


function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
			<div className={styles.productArea}>
				<Gallery />
				<BuyForm />
				<Versions />
			</div>
		</div>
	);
}


export default App;
