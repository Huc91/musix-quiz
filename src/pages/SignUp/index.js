import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';

import Page from '../Page';

//style
import * as styles from './style.module.scss';

// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

const SignUpPage = () => {
	let history = useHistory();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if(name && email && password)
			signUpUser();
	}

	const signUpUser = () => {
		//call to BE (not implemented)
		try {
			console.log('fake call to BE');
		}
		catch(err) {
			console.log(err);
		}
		finally {
			history.push('/login');	
		}
	}


	return (
		<Page>
			<h1>Sign Up</h1>
			<section className={styles.section}>
				<form
					noValidate
					onSubmit={onSubmit}
				>
					<TextInput onChange={(e) => setName(e.target.value)} value={name} label="Full name" placeholder="Enter your name"></TextInput>
					<TextInput onChange={ (e) => setEmail(e.target.value)} value={email} label="Email address" placeholder="Enter your email"></TextInput>
					<TextInput onChange={ (e) => setPassword(e.target.value)} value={password} type="password" label="Password" placeholder="Enter your password"></TextInput>
					<Button type="submit" cta="Signup"></Button>
				</form>
				<span>Already user? <Link to="/login">Login</Link></span>
			</section>
		</Page>
	);
};

export default SignUpPage;
