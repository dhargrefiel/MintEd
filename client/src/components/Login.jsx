import React, { useState } from "react";
import { Link } from "react-router-dom";

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

			<Link to="/Social"><button>Log in</button></Link>
		</div>
    );
}

export default Login;