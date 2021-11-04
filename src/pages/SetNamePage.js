import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { Link } from 'react-router-dom';

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';
import { UserScores } from '../components/UserScores';

const SetNamePage = () => {

    const [name, setName] = useState(null);

    const [playerName, setPlayerName] = useLocalStorage("player", '');

    const savePlayer = (name) => {
        setPlayerName(name);
    }

    return (
        <Page>
            {
                playerName
                    ?
                    <React.Fragment>
                        <span>Hello, {playerName}</span>
                        <UserScores playerName={playerName}></UserScores>
                        <MainButton cta="CHANGE PLAYER" onClick={() => savePlayer('')} />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <label>Set your name to play</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Insert your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <MainButton cta="SET PLAYER" onClick={() => savePlayer(name)} />
                    </React.Fragment>
            }
            <Link to="/quiz">PLAY</Link>


        </Page>
    );
};

export default SetNamePage;