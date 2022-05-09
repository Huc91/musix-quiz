import React from 'react';
import Page from '../Page';

//style
import * as styles from './style.module.scss';


const HomePage = () => {

	return (
		<Page>
			<h1 className={styles.hero}>WHO</h1>
			<h1 className={`${styles.hero} ${styles['hero--tabbed']}`}>SINGS</h1>
		</Page>
	);
};

export default HomePage;
