import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { Link } from 'react-router-dom';

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const SetNamePage = () => {

    const [name, setName] = useState(null);

    const [playerName, setPlayerName] = useLocalStorage("player", '');

    const savePlayer = (name) => {
        setPlayerName(name);
    }

    return (
        <Page>
            <label>Set your name to play</label>
            <input
                id="name"
                type="text"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
            />
            <MainButton cta="SET PLAYER" onClick={() => savePlayer(name)} />
            <Link to="/">Go Back</Link>
        </Page>
    );
};

export default SetNamePage;