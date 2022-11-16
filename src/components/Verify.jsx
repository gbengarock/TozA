import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import mail from '../assets/Mail.png'

const Verify = () => {
  return (
    <div className='w-full h-screen flex sm:bg-[#D7D7D7]'>
        <div className='w-[90%] sm:w-[70%] h-[60%] items-center mx-auto my-10 sm:p-10 sm:my-auto bg-white'>
            <Link to='/'><BiArrowBack size={30}/></Link>
            <div className='items-center mx-auto my-40 sm:my-20'>
                <img src={mail} alt='/' className='mx-auto' />
                <div className='text-center my-5'>
                    <h1 className='font-bold'>Verify your email address</h1>
                    <p className='mb-10'>You've entered {} as the email address for your account. Please verify this email by clicking the button below</p>
                    <Link to='/verify/code' className='px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-xs rounded-xl'>Verify your email</Link>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Verify