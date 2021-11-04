import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const ResultsPage = () => {

    const [allUsersHighScores] = useLocalStorage('all_users_high_scores', null);
    const allUsersHighScoresArr = allUsersHighScores ? JSON.parse(allUsersHighScores) : [];
    const sortedScores = allUsersHighScoresArr.sort((a, b) => {
            return b.score - a.score;
    });

    return (
        <Page>
            <h2>Results</h2>
            <div>
                <span>All players high scores</span>
                {
                    sortedScores
                    ?
                        <ul>
                            {sortedScores.map(({ score, playerName }, i) => <li key={i}>{`${playerName}: ${score}`}</li>)}
                        </ul>
                    :
                    <span>No high scores saved</span>
                }
                </div>
            <Link to="/">
                <MainButton cta="PLAY AGAIN" />
            </Link>
        </Page>
    );
};

export default ResultsPage;