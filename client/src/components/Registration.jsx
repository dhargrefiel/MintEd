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
        <div className="w-full flex justify-center justify-start items-center">
            <div className='p-10 m-5 sm:w-96 flex flex-col justify-start bg-whitetrans rounded-2xl drop-shadow-2xl'>
                <h1 className='text-center font-bold text-4xl mb-5 text-white'>Registration</h1>
                <label className='font-bold text-xl my-2 text-white'  for="username">
                    Username
                </label>
                <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="text" name="username" placeholder="Username" id="username" onChange={(e) => {setEmailReg(e.target.value)}} required></input>

                <label className='font-bold text-xl my-2 text-white'  for="address">
                    Metamask Address
                </label>
                <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="text" name="address" placeholder="Metamask Address" id="address" onChange={(e) => {setEmailReg(e.target.value)}} required></input>
                
                
                <label className='font-bold text-xl my-2 text-white'  for="email">
                    Email
                </label>
                <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="email" name="email" placeholder="Email" id="email" onChange={(e) => {setEmailReg(e.target.value)}} required></input>

                <label className='font-bold text-xl my-2 text-white' for="password">
                    Password 
                </label>
                <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="password" name="password" placeholder="Password" id="password" onChange={(e) => {setPasswordReg(e.target.value)}}required ></input>

                <label className='font-bold text-xl my-2 text-white' for="password">
                    Confirm Password 
                </label>
                <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="password" name="passwordconf" placeholder="Confirm Password" id="passwordconf" onChange={(e) => {setPasswordReg(e.target.value)}}required ></input>

                
                <button className='bg-button rounded-full p-2 w-25 text-white mt-10 hover:bg-buttonhover' onClick={register}>Sign up</button>
            </div>
        </div>
    );
}

export default Registration;