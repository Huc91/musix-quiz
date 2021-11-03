import React from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const HomePage = () => {

    const [playerName] = useLocalStorage("player", '');
    
    let history = useHistory();

    const startGame = () => {
        if (!playerName) {
            history.push("/set-name")
        } else {
            history.push("/quiz")
        }
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