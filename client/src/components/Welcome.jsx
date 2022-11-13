import React, { useContext } from 'react';
import { AiFillPlayCircle, AiOutlineUserAdd } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
const { ethereum } = window;

import { Link } from "react-router-dom";
import { useState } from 'react';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Welcome = () => {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const { connectWallet, currentAccount, formdata, sendTransaction, handleChange} = useContext(TransactionContext);

    return (
            <div className='flex flex-col w-full justify-center items-center mt-10'>
                <div className='flex mf:flex-row flex-col items-start justify-between md:p-10 py-12 space-x-20'>
                    <div className='flex flex-1 justify-start flex-col'>
                        <h1 className='text-3xl my-5 sm:text-5xl text-white text-white font-bold py-1'>Learn Web 3<br /> across the world</h1>
                        <p className="text-white mt-5 mb-5">
                        MintEd is an edutainment-focused socialfi network that allows
                        <br />users and partner companies to share factual information
                        <br />under their expertise on the Web3.
                        </p>
                        <Link to='/Tutorial'>
                            <li className="flex flex-row justify-center my-5 hover:bg-violet-600  focus:ring focus:ring-violet-300 ... text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">                                  
                                <p className='text-white text-base font-semibold'>Get Started</p>
                            </li>
                        </Link>
                        
                        {/* LEFT SIDE */}
                        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                            <div className='rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Share</div>
                            <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Learn</div>
                            <div className='rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Earn</div>                    
                            <div className='rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Inclusivity</div>
                            <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Community</div>
                            <div className='rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>Web 3.0</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='p-10 m-5 sm:w-96 w-full flex flex-col justify-start bg-whitetrans rounded-2xl drop-shadow-2xl'>
                        {/* <Input placeholder="Username" name="username" type="text"/>  */}
                        <h1 className='text-center font-bold text-4xl mb-5 text-white'>LOGIN</h1>
                        {!currentAccount && (                   
                                <div className='flex items-center justify-center'>
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

                        <label className='font-bold text-xl my-2 text-white' for="email">
                            Email
                        </label>
                        <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="text" name="email" placeholder="Email" id="" onChange={(e) => {setEmailLogin(e.target.value)}} required></input>

                        <label className='font-bold text-xl my-2 text-white' for="password">
                            Password
                        </label>
                        <input className='p-2 border-solid border-2 rounded-md bg-whitetrans' type="password" name="password" placeholder="Password" id="password" required onChange={(e) => {setPasswordLogin(e.target.value)}}></input>
                        
                        {!currentAccount && (                   
                                <div className='flex items-center justify-center'>
                                    <button type="button" onClick={connectWallet} className="flex flex-row justify-center my-5 bg-violet-600 hover:ring hover:ring-violet-300 text-white w-full mt-10 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer" disabled>
                                        Login
                                    </button>
                                </div>
                        )}

                        {currentAccount && (     
                            <Link to="/Social">            
                                <div className='flex items-center justify-center'>
                                    <button type="button" onClick={connectWallet} className="flex flex-row justify-center hover:ring hover:ring-violet-300 bg-violet-600 ... text-white w-full mt-5 border-[1px] py-2 px-5 border-[#3d4f7c] rounded-full cursor-pointer">
                                        Login
                                    </button>
                                </div>
                            </Link>  
                        )}
                        
                    </div>
                </div>

                <div className='flex flex-col w-5/6 justify-center items-center mt-20'>
                    <h1 className='text-white text-4xl text-center font-bold py-5'>About the App</h1>
                    <div className='px-20 text-justify text-white'>
                    <p>MintEd is an edutainment-focused socialfi network that allows users and partner companies to share factual information under their expertise on the Web3. A brand-new social network called SocialFi is built on the idea of bringing people together who share interests. This website distinguishes itself from other social networks by focusing on content sharing and discovery in web 3.0. Using this SocialFi, you can connect with people who share your interests and find and share content that is pertinent to them.
                        <br/><br/>The opportunity to earn eth through learning and sharing is another aspect that makes this project exciting. Professionals, particularly web 3.0 enthusiasts, have the chance to use this program to ask questions or start forums in the online community. To pose a question or submit something, you must have a certain number of eth. Then, members of the MintEd community can engage with each other by leaving comments and giving each other an upvote or downvote. The user with the most upvotes is entitled to a portion of the eth that was paid by the post's creator. Additionally, there will be monetization for experts who can gather a particular amount of upvotes, which will be their ticket into the leaderboard for more benefits. People will be encouraged to utilize the website thanks to this system as it makes it easy for them to learn, share, and earn.</p>
                </div>
                </div>
                
            </div>
            
    );
}

export default Welcome;