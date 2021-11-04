//style
import React from 'react';
import useLocalStorage from "use-local-storage";
// import * as styles from './style.module.css';

export const UserScores = ({ playerName }) => {

    const [userSavedScores] = useLocalStorage(`${playerName}_high_score`, null);
    const allUserScores = userSavedScores ? JSON.parse(userSavedScores) : [];
    const lastScores = allUserScores.length && allUserScores.reverse();

    return (
        <div>
            <span>All your scores</span>
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