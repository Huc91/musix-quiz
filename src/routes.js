import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import QuizPage from './pages/QuizPage';

/**
 * Routes component containing routes for the whole application
 */
const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/quiz' component={QuizPage} />
    </Switch>
);

export default Routes;