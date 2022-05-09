import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { setGlobalState } from '../../state';
import Page from '../Page';

//style
import * as styles from './style.module.scss';

// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

const LoginPage = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const onSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			signInUser();
		}
	}

	const signInUser = () => {
		//call to BE (not implemented)
		try {
			console.log('fake call to BE');
		}
		catch(err) {
			console.log(err);
		}
		finally {
			setGlobalState('isUserLoggedIn', true);
		}
	}

	return (
		<Page>
			<h1>Sign in</h1>
			<section className={styles.section}>
				<form 	noValidate
					onSubmit={onSubmit}>
					<TextInput onChange={ (e) => setEmail(e.target.value)} value={email} label="Email address" placeholder="Enter your email"></TextInput>
					<TextInput onChange={ (e) => setPassword(e.target.value)} value={password} type="password" label="Password" placeholder="Enter your password"></TextInput>
					<Button type="submit" cta="Login"></Button>
				</form>
				<span>New here? <Link to="/sign-up">Sign up</Link></span>
			</section>
		</Page>
	);
};

export default LoginPage;
