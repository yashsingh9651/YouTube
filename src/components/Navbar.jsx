import React from 'react';
import { Avatar } from '@mui/material';
import {AiFillYoutube,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai';
import {BiVideoPlus} from 'react-icons/bi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/actions/authAction';
export const Navbar = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleSidebar());
    };
  return (
    <>
    <div className="flex items-center justify-between pt-2 sticky z-50 top-0 mb-4 bg-black">
        <div className='flex items-center md:text-3xl md:font-semibold lg:text-xl lg:font-bold'>
            <div className='hidden lg:block hover:bg-[#222222] mx-4 p-3 cursor-pointer rounded-full'>
                <AiOutlineMenu onClick={handleClick}/>
            </div>
            <AiFillYoutube className='text-red-700 ml-1 lg:ml-0 text-2xl md:text-4xl lg:first-letter:text-3xl'/>
            <div><Link to={"/"}>YouTube</Link></div>
        </div>
        <div className='flex items-center custom-a rounded-full overflow-hidden'>
            <div><input className='bg-[#121212] border-none w-[35vw] px-3 py-2' placeholder='Search' type="text" /></div>
            <div className='px-4 py-2 bg-[#222222]'>
                <Link to={"/search/:search"}><AiOutlineSearch className='lg:text-2xl'/></Link>
            </div>
        </div>
        <div className='lg:text-2xl flex items-center'>
            <BiVideoPlus className='mr-5 hidden lg:block'/>
            <IoIosNotificationsOutline className='mr-5 hidden lg:block'/>
            <Avatar className='mr-1 lg:mr-8' alt="Yash Singh" src="/bg.jpg" />
        </div>
    </div>
    </>
  )
}
