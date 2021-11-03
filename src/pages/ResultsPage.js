import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const ResultsPage = () => {

    const [highScores] = useLocalStorage("HIGH_SCORES", 'high scores');
    const highScoresArray = JSON.parse(highScores) ?? [];

    return (
        <Page>
            <h2>Results</h2>
            <Link to="/">
                <MainButton cta="PLAY AGAIN" />
            </Link>
        </Page>
    );
};

export default ResultsPage;