import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SetNamePage from './pages/SetNamePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

/**
 * Routes component containing routes for the whole application
 */
const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/set-name' component={SetNamePage} />
        <Route exact path='/quiz' component={QuizPage} />
        <Route exact path='/results' component={ResultsPage} />
    </Switch>
);

export default Routes;