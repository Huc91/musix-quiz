import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/quiz">
                <MainButton cta="START" />
            </Link>
        </Page>
    );
};

export default HomePage;