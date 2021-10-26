import React from 'react';

import Page from "./Page";

// Components
import { MainButton } from '../components/MainButton';

const HomePage = () => {

    return (
        <Page>
            <h1>WHO SINGS</h1>
            <p>
                the quiz game 
                for lyrics enthusiasts 
            </p>
            <MainButton cta="START" />
        </Page>
    );
};

export default HomePage;