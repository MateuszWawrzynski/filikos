import styles from './App.module.scss'

import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Gallery from '../Gallery/Gallery';


function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
			<div className={styles.buySection}>
				<Gallery />
			</div>
		</div>
	);
}


export default App;
