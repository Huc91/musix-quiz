import React,  { useState } from 'react';

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const SetNamePage = () => {

    const [name, setName] = useState(null)

    return (
        <Page>
            <label for="name">Set your player name</label>
            <input
                id="name"
                type="text"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
            />
            <MainButton cta="PLAY" />
        </Page>
    );
};

export default SetNamePage;