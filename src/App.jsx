import { useState } from 'react';
import './App.css';

const formValidationSchema = yup.object().shape({
	username: yup
		.string()
		.matches(/^.{7,}$/i, 'Username must be 7 characters or more')
		.required('Username is a required field'),
	email: yup
		.string()
		.matches(
			/^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/i,
			'Invalid Email '
		)
		.required('Email is a required field'),
	password: yup
		.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
			'Password must contain minimum 8 characters, atleast one lowercase letter, uppercase letter, one number and one special character.'
		)
		.required('Password is a required field'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must and should match')
		.required('Confirm Password is required'),
});

function App() {
	return <div>Hellow</div>;
}

export default App;
