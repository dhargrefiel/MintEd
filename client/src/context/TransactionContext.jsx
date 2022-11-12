import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [ formdata, setFormData ] = useState({addressTo: '', amount: '', keyword:'', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const checkIfWalletisConnected = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask!" );

            const accounts = await ethereum.request({ method:'eth_accounts' });
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
    
                //getAllTransactions();
            } else {
                console.log('No accounts found!');
            }

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }


    } 

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask!" );

            const accounts = await ethereum.request({ method:'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask!" );

            //get data from form
            const { addressTo, amount, keyword, message } = formdata;
            
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',// 210000 gwei
                    value: parsedAmount._hex, //convert to gwei
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            setIsLoading(true);
            console.log('Loading - ${transactionHash.hash}');
            await transactionHash.wait();

            setIsLoading(false);
            console.log('Success - ${transactionHash.hash}');

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletisConnected();
    }, [])

    return(
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formdata, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}