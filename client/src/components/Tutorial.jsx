import { Link } from "react-router-dom";

import metamask from '../../images/metamask.png';

const Tutorial = () => {
    return (
        <div className='w-full items-center justify-center'>
            <h1 className='text-white text-5xl text-center font-bold'>Create your own <br/> Metamask Wallet! </h1>
            <div className='w-full flex flex-row items-center justify-center space-x-10'>
                <div className='flex flex-row items-center justify-center'>
                    <a href ="https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/"><button className='bg-button rounded-full items-center py-2 px-5 mt-8 text-white'>Create Wallet</button></a>
            </div>
            <div className='flex flex-rowitems-center justify-center'>
                <Link to='/Registration'><button className='bg-button rounded-full items-center py-2 px-5 mt-10 text-white'>Sign-up Now</button></Link>
            </div></div>
            <div className='flex flex-col-reverse w-full justify-center items-center mt-5'>
                <img src={metamask} alt="metamask" className='w-90 h-70 cursor-pointer' />
            </div>
            
            
            
        </div>
    );
}

export default Tutorial;