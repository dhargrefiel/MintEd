import React, { useState, useContext } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import { TransactionContext } from '../context/TransactionContext';
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai';
const { ethereum } = window;

const Registration = () => {
    const [emailReg, setEmailReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');
    const [passwordReg1, setPasswordReg1] = useState('');
    const [userNameReg, setUserNameReg] = useState('');
    const [metaAddressReg, setMetaAddressReg] = useState('');
    const { connectWallet, currentAccount, formdata, sendTransaction, handleChange} = useContext(TransactionContext);

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            //ito yung ipapasa sa backend
            email:emailReg, 
            password:passwordReg,
            password1:passwordReg1,
            metaAddress:metaAddressReg,
            username:userNameReg

        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div className="w-full flex justify-center justify-start items-center">
            <div className='p-10 m-5 sm:w-96 flex flex-col justify-start bg-whitetrans rounded-2xl drop-shadow-2xl'>
                <h1 className='text-center font-bold text-4xl mb-5 text-white'>Registration</h1>

                {!currentAccount && (                   
                    <div>
                        <button type="button" onClick={connectWallet} className="flex flex-row justify-center my-5 bg-violet-600 hover:ring hover:ring-violet-300 text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">
                            <p className='text-white text-base font-semibold'>Connect Wallet</p>
                        </button>
                    </div>
                )}

                {currentAccount && (
                    <div className='flex justify-center items-center'>
                        <AiOutlineUserAdd className='text-white text-3xl cursor-pointer'></AiOutlineUserAdd>
                        <p className="text-white">Metamask Connected</p>
                    </div>
                )}
                
                <label className='font-bold text-xl my-2 text-white'  for="username">
                    Username
                </label>
                <input className='p-1 border-solid border-2 rounded-md bg-whitetrans' type="text" name="username" placeholder="Username" id="username" onChange={(e) => {setUserNameReg(e.target.value)}} required></input>

                <label className='font-bold text-xl my-2 text-white'  for="address">
                    Metamask Address
                </label>
                <input className='p-1 border-solid border-2 rounded-md bg-whitetrans' type="text" name="address" placeholder="Metamask Address" id="address" onChange={(e) => {setMetaAddressReg(e.target.value)}} required></input>
                
                
                <label className='font-bold text-xl my-2 text-white'  for="email">
                    Email
                </label>
                <input className='p-1 border-solid border-2 rounded-md bg-whitetrans' type="email" name="email" placeholder="Email" id="email" onChange={(e) => {setEmailReg(e.target.value)}} required></input>

                <label className='font-bold text-xl my-2 text-white' for="password">
                    Password 
                </label>
                <input className='p-1 border-solid border-2 rounded-md bg-whitetrans' type="password" name="password" placeholder="Password" id="password" onChange={(e) => {setPasswordReg(e.target.value)}}required ></input>

                <label className='font-bold text-xl my-2 text-white' for="password">
                    Confirm Password 
                </label>
                <input className='p-1 border-solid border-2 rounded-md bg-whitetrans' type="password" name="passwordconf" placeholder="Confirm Password" id="passwordconf" onChange={(e) => {setPasswordReg1(e.target.value)}}required ></input>

                {!currentAccount && (
                    <button className='flex flex-row justify-center my-5 bg-violet-600 hover:ring hover:ring-violet-300 text-white w-full mt-10 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={register} disabled>Sign up</button>
                )}
            
                {currentAccount && (
                    <Link to="/"><button className='flex flex-row justify-center my-5 bg-violet-600 hover:ring hover:ring-violet-300 text-white w-full mt-10 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={register}>Sign up</button></Link>
                )}

                </div>
        </div>
    );
}

export default Registration;