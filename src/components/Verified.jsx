import React from 'react'
import approval from '../assets/Approval.png'
import {BiArrowBack} from 'react-icons/bi' 
import { Link } from 'react-router-dom'

const Verified = () => {
  return (
    <div className='w-full h-screen flex sm:bg-[#D7D7D7]'>
        <div className='w-[90%] sm:w-[70%] sm:h-[60%] items-center mx-auto my-10 sm:p-10 sm:my-auto bg-white'>
            <Link to='/verify/code'><BiArrowBack size={30}/></Link>
            <div className='items-center mx-auto my-40 sm:my-20'>
                <img src={approval} alt='/' className='mx-auto' />
                <div className='text-center my-5'>
                    <h1 className='font-bold'>Account created</h1>
                    <p className='mb-10'>Congratulations, your account has been created successfully</p>
                    <Link to='/login' className='px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-xs rounded-xl'>Login to account</Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verified