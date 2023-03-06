import React from 'react';
import {SidebarItem} from './SidebarItem';
import {AiFillHome} from 'react-icons/ai';
import {CiLogin} from 'react-icons/ci';
import {MdSubscriptions,MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater} from 'react-icons/md';
import {RiVideoLine} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from '../redux/actionType';
export const Sidebar = () => {
  // ? Log Out HandleClick    
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({type:LOG_OUT});
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };
  // ? To prevent Error Message on Console
  const doNothing = () => {
    console.log('Thankks');
  };
  const toggle = useSelector(state => state.auth.toggle);
  return (
    <>
    {toggle?<div className={`hidden lg:block w-[13vw] fixed z-40`}>
    <SidebarItem displayName={"Home"} Icon={AiFillHome} to={"/"} handleClick={doNothing}/>
    <SidebarItem displayName={"Subscription"} Icon={MdSubscriptions} handleClick={doNothing}/>
    <hr className='my-2'/>
    <SidebarItem displayName={"Library"} Icon={MdOutlineVideoLibrary} handleClick={doNothing}/>
    <SidebarItem displayName={"History"} Icon={MdOutlineHistory} handleClick={doNothing}/>
    <SidebarItem displayName={"Your Vedios"} Icon={RiVideoLine} handleClick={doNothing}/>
    <SidebarItem displayName={"Watch Later"} Icon={MdOutlineWatchLater} handleClick={doNothing}/>
    <SidebarItem displayName={"Log Out"} Icon={CiLogin} handleClick={handleClick} />
    </div>:<div className={`w-[5vw] fixed hidden lg:block`}>
    <SidebarItem Icon={AiFillHome} to={"/"} handleClick={doNothing}/>
    <SidebarItem Icon={MdSubscriptions} handleClick={doNothing}/>
    <SidebarItem Icon={MdOutlineVideoLibrary} handleClick={doNothing}/>
    <SidebarItem Icon={MdOutlineHistory} handleClick={doNothing}/>
    <SidebarItem Icon={RiVideoLine} handleClick={doNothing}/>
    <SidebarItem Icon={MdOutlineWatchLater} handleClick={doNothing}/>
    <SidebarItem Icon={CiLogin} handleClick={handleClick} />
    </div>}
    {/* Responsive Design */}
    <div className="fixed bottom-0 z-40 lg:hidden bg-black w-screen custom-b">
      <div className='flex items-center justify-between'>
      <SidebarItem displayName={"Home"} Icon={AiFillHome} to={"/"} handleClick={doNothing}/>
      <SidebarItem displayName={"Subscription"} Icon={MdSubscriptions} handleClick={doNothing}/>
      <SidebarItem displayName={"Library"} Icon={MdOutlineVideoLibrary} handleClick={doNothing}/>
      <SidebarItem displayName={"History"} Icon={MdOutlineHistory} handleClick={doNothing}/>
      </div>
    </div>
    </>
  )
}