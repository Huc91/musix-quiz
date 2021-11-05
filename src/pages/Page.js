import React, { useEffect } from 'react';

//style
import * as styles from './style.module.scss';

const Page = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <main className={styles.container}>{props.children}</main>;
};

export default Page;
