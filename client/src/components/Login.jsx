import React, { useState } from "react";

const Login = () => {

	const [emailLogin, setEmailLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');

    return (
		<div class="login">
			<h1>Login</h1>
			<label for="email">
				Email:
			</label>
			<input type="text" name="email" placeholder="Email" id="email" onChange={(e) => {setEmailLogin(e.target.value)}} required></input>

			<label for="password">
				Password: 
			</label>
			<input type="password" name="password" placeholder="Password" id="password" required onChange={(e) => {setPasswordLogin(e.target.value)}}></input>

			<button>Log in</button>
		</div>
    );
}

export default Login;