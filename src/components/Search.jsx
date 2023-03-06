import React from 'react';
import { Sidebar } from './Sidebar';
export const Search = () => {
  return (
    <>
    <div className='flex'>
        <div style={{flex:0.13}}><Sidebar/></div>
        <div style={{flex:0.87}} className="px-3">
            Search
        </div>
    </div>
    </>
  )
}
