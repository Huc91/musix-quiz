import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { useHistory } from 'react-router-dom';

import Page from "../Page";

//style
import * as styles from './style.module.scss';

// Components
import { MainButton } from '../../components/MainButton';
import { UserScores } from '../../components/UserScores';

const SetNamePage = () => {

    let history = useHistory();

    const [name, setName] = useState(null);

    const [playerName, setPlayerName] = useLocalStorage("player", '');

    const savePlayer = (name) => {
        setPlayerName(name);
    }

    const play = () => {
        if (!playerName) {
            return;
        }
          history.push("/quiz")

    }

    return (
        <Page>
            {
                playerName
                    ?
                    <React.Fragment>
                        <span className={styles.title}>Hello, {playerName}</span>
                        <button className={styles['change-player']} onClick={() => savePlayer('')} >Change player</button>
                        <UserScores playerName={playerName}></UserScores>
                       
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <label className={styles.title}>Set your name to play</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Insert your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className={styles['change-player']} onClick={() => savePlayer(name)} >Save player name</button>
                    </React.Fragment>
            }
            <MainButton onBottom={true} cta="PLAY" disabled={!playerName} onClick={() => play()} />


        </Page>
    );
};

export default SetNamePage;