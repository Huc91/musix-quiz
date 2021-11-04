import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const HomePage = () => {
    
    let history = useHistory();

    const startGame = () => {
            history.push("/set-name")
    }

    return (
        <Page>
            <h1>WHO SINGS</h1>
            <p>
                the quiz game 
                for lyrics enthusiasts 
            </p>
            <MainButton cta="START" onClick={() => startGame()}/>
        </Page>
    );
};

export default HomePage;