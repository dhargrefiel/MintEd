import { Link } from "react-router-dom";
import { Loader } from "../../components";
import { TransactionContext } from '../../context/TransactionContext';
import React, { useContext } from 'react';

import { AiFillPlayCircle,AiFillCaretDown,AiFillCaretUp,AiOutlineComment,AiFillFlag} from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Router } from "react-router-dom";
import Axios from 'axios';
import { useState, useEffect } from 'react';

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

    const [content, setContent] = useState([]);
    const[likes,setLikes]=useState([]);
    const [insertComment, setinsertComment] = useState([]);
    


    useEffect(() => {
        Axios.get('http://localhost:3002/get').then((response)=>{
            setContent(response.data)
            response.data.map((val)=>{
            setLikes([...likes,val.likes])
            });
        });
    }, []);


    const likePost = (post_id, key) => {
        var tempLikes = content;
        tempLikes[key].likes = tempLikes[key].likes + 1;
    
        Axios.post("http://localhost:3002/like", {
          userLiking: localStorage.getItem("username"),
          post_id: post_id,
        }).then((response) => {
          setContent(tempLikes);
        });
      };

      const unlikePost = (post_id, key) => {
        var tempLikes = content;
        tempLikes[key].likes = tempLikes[key].likes - 1;
    
        Axios.post("http://localhost:3002/unlike", {
          userLiking: localStorage.getItem("username"),
          post_id: post_id,
        }).then((response) => {
          setContent(tempLikes);
        });
      };

    // functions used by buttons
    const handleSubmit = (e) =>{
        //const { addressTo, amount, keyword, message } = formdata;
        e.preventDefault();
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col w-full m-10">
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
            <div className="flex mf:flex-col flex-col items-center justify-center md:px-20 pb-10 px-4">
                    {content.map((val,key)=>{
                    return <div className='w-8/12 h-auto blue-glassmorphism p-5 my-2'>
                    <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col mt-2 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                            <SiEthereum fontSize={21} color="#fff" />
                        </div>

                    
                        <div className="flex flex-col w-full">
                             <div className='flex flex-col w-full px-2'>
                                            <div className='flex flex-col px-2'>
                                                <p className="text-white font-bold pl-2">User {val.user_id}</p>
                                            </div> 
                                            <div className='flex flex-col px-2'>
                                                <p className="text-white font-italic pl-2">{val.timestamp}</p>
                                            </div>  
                                            <div className='flex flex-col justify-items-start items0-center mt-5 mr-2 mb-2'>
                                                <p className="text-white text-justify px-5">{val.content} </p>
                                            </div> 
                                <div className='flex flex-row w-full px-2 mt-2 justify-start items-start'>
                                    <div className='flex flex-row w-1/12'>
                                        <AiFillCaretUp className='w-8 h-8 text-purple'
                                        id="likeButton"
                                        onClick={() => {
                                        likePost(val.post_id, key);
                                       }}
                                        />
                                    </div> 
                                    <div className='flex flex-row w-1/12'>
                                        <p className='text-purple mt-1 mr-4'>{val.likes}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <AiFillCaretDown className='w-8 h-8 text-purple mr-5'
                                        id="unlikeButton"
                                        onClick={() => {
                                        unlikePost(val.post_id, key);
                                        }}
                                        />
                                        <div className='flex flex-row'>
                                        <AiOutlineComment className='w-8 h-8 text-purple mr-4'/>
                                    </div>
                                    <div className='flex flex-row w-1/12'>
                                        <p className='text-purple mt-1 mr-5'>150</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <AiFillFlag className="w-7 h-7 mt-1 ml-10 text-red"/>
                                    </div>  
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div> 
                })}
                </div>
            </div>           
        </div>           
    );
}

export default Social;
