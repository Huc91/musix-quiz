//style
import React from 'react';
import useLocalStorage from "use-local-storage";

import * as styles from './style.module.scss';

export const UserScores = ({ playerName }) => {

    const [userSavedScores] = useLocalStorage(`${playerName}_high_score`, null);
    const allUserScores = userSavedScores ? JSON.parse(userSavedScores) : [];
    const lastScores = allUserScores.length && allUserScores.reverse();

    return (
        <div className={styles.container}>
            <span className={styles.container__subtitle}>All your scores</span>
            <br />
            <br/>
            {
                lastScores
                ?
                    <ul>
                        {lastScores.map((score, i) => <li key={i}>{score}</li>)}
                    </ul>
                :
                    <span>You haven't played yet!</span>
            }
        </div>

    );
};