import { useState, useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineUserAdd, AiOutlineLogout } from 'react-icons/ai';


import logo from '../../images/greynavicon.png';
import { Link } from 'react-router-dom';

import { ethers } from 'ethers';
const { ethereum } = window;

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex bg-transparent md:justify-center justify-between items-center p-4 glass-morphism'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-25 h-20 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify items-center flex-initial space-x-10'>
                {/* {["Home", "Social", "Education"].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))} */}
                <Link className='font-bold' to='/'><li>Home</li></Link>
                <Link className='font-bold' to='/Social'><li>Social</li></Link>
                <Link className='font-bold' to='/Leaderboard'><li>Leaderboard</li></Link>
                <Link className='font-bold' to='/'><AiOutlineLogout className='text-3xl'></AiOutlineLogout></Link>

            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        '
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Home", "Social", "Education"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;