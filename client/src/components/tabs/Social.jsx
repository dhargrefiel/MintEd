import { Link } from "react-router-dom";
import { Loader } from "../../components";
import { TransactionContext } from '../../context/TransactionContext';
import React, { useContext } from 'react';

import { AiFillPlayCircle,AiFillCaretDown,AiFillCaretUp,AiOutlineComment} from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="any"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" 
        hidden
    />
);

const Social= () => {
    const { connectWallet, currentAccount, formdata, sendTransaction, handleChange } = useContext(TransactionContext);

    // functions used by buttons
    const handleSubmit = (e) =>{
        const { addressTo, amount, keyword, message } = formdata;
        e.preventDefault();
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col m-10">
                <div className="flex mf:flex-row flex-col items-center justify-center md:px-20 py-5 px-4">
                    <div className='w-8/12 p-5 blue-glassmorphism items-center justify-center'>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col mt-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                                <SiEthereum fontSize={21} color="#fff" />
                            </div>
                            <div className='flex flex-col w-9/12 h-auto px-5'>
                                <input placeholder="What's on your mind?" className="my-2 w-full rounded-sm p-2 outline-non bg-transparent text-white border-none text-sm white-glassmorphism" type="text" ></input>
                                <Input placeholder="Address To" name='addressTo' type='text' value="0x92Be8C2abAA48D69235EfB5d6ab998DA6a175137"/>
                                <Input placeholder="Amount (ETH)" name='amount' type='number' value="0.0003" />
                                <Input placeholder="Keyword (GIF)" name='keyword' type='text' value="Ask Question"/>
                                <Input placeholder="Enter Message" name='message' type='text' value="Ask Question"/>
                                            </div>  
                            <div className='flex flex-col'>
                                {false ? (
                                <Loader />
                                ): (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="hover:bg-violet-600  focus:ring focus:ring-violet-300 ... text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                                    >
                                        Ask Question
                                    </button>
                                )}
                            </div>  
                        </div>
                    </div>
                </div>

            {/* posts  */}
            <div className="flex mf:flex-row flex-col items-center justify-center md:px-20 pb-10 px-4">
                <div className='w-8/12 h-auto blue-glassmorphism p-5 '>
                    <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col mt-2 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                            <SiEthereum fontSize={21} color="#fff" />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className='flex flex-col px-2'>
                                <div className='flex flex-col px-2'>
                                    <p className="text-white font-bold pl-2">username</p>
                                </div>  
                                <div className='flex flex-col px-2'>
                                    <p className="text-white font-italic pl-2">1 min ago</p>
                                </div>  
                                <div className='flex flex-col justify-items-start items0-center mt-5 mr-2 mb-2'>
                                    <p className="text-white text-justify px-5">Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>  
                                <div className='flex flex-row px-5 mt-2'>
                                    <div className='flex flex-row'>
                                        <AiFillCaretUp className='w-8 h-8 text-purple mr-2'/>
                                    </div> 
                                    <div className='flex flex-row w-1/12'>
                                        <p className='text-purple mt-1 mr-4'>1.7k</p>
                                    </div> 
                                    <div className='flex flex-row'>
                                        <AiFillCaretDown className='w-8 h-8 text-purple mr-2'/>
                                    </div>
                                    <div className='flex flex-row w-1/12'>
                                        <p className='text-purple mt-1 mr-4'>200</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <AiOutlineComment className='w-8 h-8 text-white mr-4'/>
                                    </div>
                                    <div className='flex flex-row w-1/12'>
                                        <p className='text-purple mt-1 mr-4'>500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="h-[1px] w-full bg-gray-400 my-4" />
                    <div className="flex mf:flex-row flex-col items-center justify-center ">
                    <div className='w-full p-1 blue-glassmorphism items-center justify-center'>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col mt-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ml-2">
                                <SiEthereum fontSize={21} color="#fff" />
                            </div>
                            <div className='flex flex-col w-9/12 h-auto px-5'>
                                <input placeholder="Write your comment to earn ..." className="my-2 w-full rounded-sm p-2 outline-non bg-transparent text-white border-none text-sm white-glassmorphism" type="text"></input>
                            </div>  
                            <div className='flex flex-col'>
                                <button
                                    type = "button"
                                    onClick={handleSubmit}
                                    className=" hover:bg-violet-600  focus:ring focus:ring-violet-300 ... text-white w-40 mt-1 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-blue">
                                    Comment
                                </button></div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>   
    );
}

export default Social;