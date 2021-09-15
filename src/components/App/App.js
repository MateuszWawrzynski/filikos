import styles from './App.module.scss'

import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
		</div>
	);
}


export default App;
