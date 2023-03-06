import React, { useEffect } from 'react';
import {AiFillYoutube} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
export const Login = () => {
// ? Handle Login Click
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(login());
  }
  // ? Navigate to Home Page...
  const authToken = useSelector(state=>state.auth.authToken)
  const navigate = useNavigate();
  useEffect(() => {
    if(authToken){
      navigate('/');
    }
  }, [authToken,navigate]);
  return (
    <>
    <div className='flex items-center justify-center w-wcreen h-[90vh]'>
        <div className='md:w-[30vw] text-center md:h-[30vh] bg-[#222222] rounded-2xl'>
            <div className='flex justify-center'>
                <AiFillYoutube className='text-9xl text-red-600'/>
            </div>
            <button onClick={handleClick} className='bg-black px-2 py-1 my-3 rounded-lg text-white'>Login With Google</button>
            <h1 className='text-blue-700'>A Youtube clone Project Using Youtube Api</h1>
        </div>
    </div>
    </>
  )
}
