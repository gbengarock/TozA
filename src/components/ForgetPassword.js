import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const ForgetPassword = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/password-reset')
    }
  return (
    <div>
        
        <div className='w-[310px] h-[380px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-10'>
            <h1 className='text-black text-xl sm:text-3xl text-center font-bold my-5'>Forgot Password?</h1>
            <p className='text-base text-[#4F4F4F] text-center'>No worries, we'll send you reset instructions</p>
            <form onSubmit={handleSubmit} className='text-base text-[#292929] my-5'>
                <div className='flex flex-col my-2'>
                    <label className='my-1'>Email</label>
                    <input className='p-2 border rounded-lg text-[#9F9F9F]' type='email' placeholder='Email address' />
                </div>
                
                <button className='px-10 sm:px-20 py-3 my-3 items-center mx-auto flex border bg-[#FF971E] text-white text-base sm:text-lg rounded-xl'>Reset password</button>
                <div className='flex items-center mx-auto justify-center'><BiArrowBack size={20} /><Link to='/login' className='text-[#FF971E]'>Back to Login</Link></div>
            </form>
        </div>
    </div>
  )
}

export default ForgetPassword