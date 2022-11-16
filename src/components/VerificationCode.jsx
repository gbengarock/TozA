import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import mail from '../assets/Mail.png'

const VerificationCode = () => {
  return (
    <div className='w-full h-screen flex sm:bg-[#D7D7D7]'>
        <div className='w-[90%] sm:w-[70%] h-[60%] items-center mx-auto my-10 sm:p-10 sm:my-auto bg-white'>
            <Link to='/verify'><BiArrowBack size={30}/></Link>
            <div className='items-center mx-auto my-40 sm:my-20'>
                <img src={mail} alt='/' className='mx-auto' />
                <div className='text-center my-5'>
                    <h1 className='font-bold'>Verify your email address</h1>
                    <p className='mb-10'>Kindly provide the 6 digit code sent to {}</p>
                    <p><input type='number' className='border mb-5' /></p>
                    <Link to='/verified' className='px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-xs rounded-xl'>Verify your email</Link>
                    <p className='mt-10'>Didn't receive the mail? <Link to='/' className='text-[#FF971E]'>Click here to resend</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerificationCode