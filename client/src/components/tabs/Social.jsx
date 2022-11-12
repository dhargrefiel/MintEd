import { Link } from "react-router-dom";
import { Loader } from "../../components";
import { TransactionContext } from '../../context/TransactionContext';
import React, { useContext } from 'react';

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
        
        <div>
            <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                <p className='text-white p-5'>ASK A QUESTION</p>
                <Input placeholder="Address To" name='addressTo' type='text' value="0x92Be8C2abAA48D69235EfB5d6ab998DA6a175137"/>
                <Input placeholder="Amount (ETH)" name='amount' type='number' value="0.0003" />
                <Input placeholder="Keyword (GIF)" name='keyword' type='text' value="Ask Question"/>
                <Input placeholder="Enter Message" name='message' type='text' value="Ask Question"/>
                
                <input type="text" placeholder="What's on your mind"></input>
                <div className='h-[1px] w-full bg-gray-400 my-2' />
                        
                {false ? (
                   <Loader />
                ): (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                    >
                        Ask Question
                    </button>
                )}
                </div>
        </div>
    );
}

export default Social;