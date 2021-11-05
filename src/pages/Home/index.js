import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../Page';

//style
import * as styles from './style.module.scss';

// Components
import { MainButton } from '../../components/MainButton';

const HomePage = () => {
  let history = useHistory();

  const startGame = () => {
    history.push('/set-name');
  };

  console.log(styles);

  return (
    <Page>
      <h1 className={styles.hero}>WHO</h1>
      <h1 className={`${styles.hero} ${styles['hero--tabbed']}`}>SINGS</h1>
      <p className={styles.payoff}>
        the quiz game <br />
        for lyrics enthusiasts
      </p>
      <MainButton cta="START" onClick={() => startGame()} onBottom={true} />
    </Page>
  );
};

export default HomePage;
