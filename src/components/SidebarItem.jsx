import React from 'react';
import { Link } from 'react-router-dom';
export const SidebarItem = ({displayName,Icon,to,handleClick}) => {
  return (
    <>
    <Link to={to}>
      <div onClick={()=>{handleClick()}} className="flex-col px-0 md:px-10 lg:px-0 lg:flex-row flex items-center cursor-pointer hover:bg-[#272727] p-2 rounded-lg">
          <div className='mx-4 md:text-2xl'>{<Icon/>}</div>
          <h1 className='ml-3'>{displayName}</h1>
      </div>
    </Link>
    </>
  )
}
