import React from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Page from '../Page';

// Components
import { MainButton } from '../../components/MainButton';

//style
import * as styles from './style.module.scss';

const ResultsPage = () => {
  let history = useHistory();

  const [allUsersHighScores] = useLocalStorage('all_users_high_scores', null);
  const allUsersHighScoresArr = allUsersHighScores ? JSON.parse(allUsersHighScores) : [];
  const sortedScores = allUsersHighScoresArr.sort((a, b) => {
    return b.score - a.score;
  });

  //SET positions, if score is the same, same position
  let previousScore = sortedScores[0].score;
  let position = 1;
  sortedScores[0].position = position;
  for (let i = 1; i < sortedScores.length; i++) {
    if (sortedScores[i].score < previousScore) {
      position++;
    }
    sortedScores[i].position = position;
    previousScore = sortedScores[i].score;
  }

  const playAgain = () => {
    history.push('/');
  };

  return (
    <Page>
      <h2 className={styles.title}>Results</h2>
      <h3 className={styles.subtitle}>HIGH SCORES</h3>
      <div className={styles.scrollable}>
        {sortedScores ? (
          <ul className={styles.scrollable__scores}>
            {sortedScores.map(({ position, score, playerName }, i) => (
              <li key={i}>{`${position}. ${playerName}: ${score}`}</li>
            ))}
          </ul>
        ) : (
          <span>No high scores saved</span>
        )}
      </div>
      <MainButton cta="PLAY AGAIN" onClick={() => playAgain()} onBottom={true} />
    </Page>
  );
};

export default ResultsPage;
