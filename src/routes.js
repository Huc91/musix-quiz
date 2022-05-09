import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';

/**
 * Routes component containing routes for the whole application
 */
const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/login" component={LoginPage} />
		<Route exact path="/sign-up" component={SignUpPage} />
	</Switch>
);

export default Routes;
