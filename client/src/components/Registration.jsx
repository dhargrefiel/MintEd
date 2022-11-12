import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

const Registration = () => {
    const [emailReg, setEmailReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');
    const [displayedNameReg, setDisplayedNameReg] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            //ito yung ipapasa sa backend
            email:emailReg, 
            password:passwordReg,
            displayedName:displayedNameReg

        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div class="login">
            <h1>Registration</h1>
            <label for="email">
                Email:
            </label>
            <input type="text" name="email" placeholder="Email" id="email" onChange={(e) => {setEmailReg(e.target.value)}} required></input>

            <label for="password">
                Password: 
            </label>
            <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => {setPasswordReg(e.target.value)}}required ></input>

            <label for="displayedName">
                Preferred Displayed Name:
            </label>
            <input type="text" name="displayedName" id="displayedName" onChange={(e) => {setDisplayedNameReg(e.target.value)}} required></input>

            <button onClick={register}>Sign up</button>

            <Link to="/RegistrationEduc">
                <ul>Wanna be an Educator? Click Here.</ul>
            </Link>
        </div>
    );
}

export default Registration;