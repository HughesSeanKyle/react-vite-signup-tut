import './App.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(formValidationSchema),
	});

	return (
		<div className="bg-gray-500 min-h-[0] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto rounded-lg overflow-hidden">
				<div className="bg-white my-5 p-6 rounded-lg shadow-sm shadow-gray-900">
					<h2 className="text-2xl font-semibold mb-6">YourProjectName.io</h2>
					<form>
						<h2 className="text-xl font-semibold mb-4">SIGN UP</h2>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="username"
							>
								Username
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								id="username"
								type="text"
								name="username"
								placeholder="Your username"
								{...register('username')}
							/>
							<p className="text-red-500 text-sm mt-1">
								{errors?.username?.message}
							</p>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								id="email"
								type="email"
								name="email"
								placeholder="Your email"
								{...register('email')}
							/>
							<p className="text-red-500 text-sm mt-1">
								{errors?.email?.message}
							</p>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								id="password"
								type="password"
								name="password"
								placeholder="Your password"
								{...register('password')}
							/>
							<p className="text-red-500 text-sm mt-1">
								{errors?.password?.message}
							</p>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="passwordConfirm"
							>
								Confirm Password
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
								id="passwordConfirm"
								type="password"
								name="passwordConfirm"
								placeholder="Confirm password"
								{...register('passwordConfirm')}
							/>
							<p className="text-red-500 text-sm mt-1">
								{errors?.passwordConfirm?.message}
							</p>
						</div>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={Object.keys(errors).length !== 0}
							title={
								Object.keys(errors).length !== 0
									? 'Please complete the required fields above to submit'
									: ''
							}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
