import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';

import { Link } from "react-router-dom";
import { useState } from 'react';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Welcome = () => {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    return (
            <div className='flex flex-col w-full justify-center items-center mt-10'>
                <div className='flex mf:flex-row flex-col items-start justify-between md:p-10 py-12 space-x-20'>
                    <div className='flex flex-1 justify-start flex-col'>
                        <h1 className='text-3xl my-5 sm:text-5xl text-white text-white font-bold py-1'>Learn Web 3<br /> across the world</h1>

                        <Link to='/Tutorial'>
                            <li className="flex flex-row justify-center my-5 bg-button p-3 rounded-full cursor-pointer hover:bg-buttonhover">                                  
                                <p className='text-white text-base font-semibold'>Get Started</p>
                            </li>
                        </Link>
                        
                        {/* LEFT SIDE */}
                        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                            <div className='rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Reliability</div>
                            <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Security</div>
                            <div className='rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Ethereum</div>                    
                            <div className='rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Web 3.0</div>
                            <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Low Fees</div>
                            <div className='rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Blockchain</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='p-10 m-5 sm:w-96 w-full flex flex-col justify-start bg-whitetrans rounded-2xl drop-shadow-2xl'>
                        {/* <Input placeholder="Username" name="username" type="text"/>  */}
                        <h1 className='text-center font-bold text-4xl mb-5 text-white'>LOGIN</h1>
                        <label className='font-bold text-xl my-2 text-white' for="username">
                            Username
                        </label>
                        <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="text" name="username" placeholder="Username" id="username" onChange={(e) => {setEmailLogin(e.target.value)}} required></input>

                        <label className='font-bold text-xl my-2 text-white' for="password">
                            Password
                        </label>
                        <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="password" name="password" placeholder="Password" id="password" required onChange={(e) => {setPasswordLogin(e.target.value)}}></input>
                        <button className='bg-button rounded-full p-2 w-25 text-white m-10 hover:bg-buttonhover'>Log in</button>
                    </div>
                </div>

                <div className='flex flex-col w-full justify-center items-center mt-20'>
                    <h1 className='text-white text-4xl text-center font-bold py-5'>About the App</h1>
                    <div className='px-20 text-justify text-white'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                </div>

                <div className='flex flex-col w-full justify-center mt-5'>
                    <div className='flex flex-row w-full mt-10 px-20'>
                        <h1 className='text-white text-4xl font-bold py-5'>About Web 3.0</h1>
                    </div>
                    <div className='flex flex-row w-full mt-10 px-20'>
                        <h1 className='text-white text-4xl font-bold py-5'>About Web 3.0</h1>
                    </div>
                </div>

                
            </div>
            
    );
}

export default Welcome;