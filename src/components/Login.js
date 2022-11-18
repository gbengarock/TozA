import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }

  return (
    <div>
        
        <div className='w-[310px] h-[450px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-4 sm:p-10'>
            <h1 className='text-black text-xl sm:text-3xl text-center font-bold my-5'>Login</h1>
            <p className='text-base text-[#4F4F4F] text-center'>Welcome back! Please enter your details</p>
            <form onSubmit={handleSubmit} className='text-base text-[#292929] my-5'>
                <div className='flex flex-col my-2'>
                    <label className='my-1'>Email</label>
                    <input className='p-2 border rounded-lg text-[#9F9F9F]' type='email' placeholder='Email address' required />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-1'>Password</label>
                    <input className='p-2 border rounded-lg text-[#9F9F9F]' type='password' placeholder='Password' required />   
                    <h6><Link to='/password-forget' className='text-xs text-[#FF971E]'>Forgot Password?</Link></h6>
                </div>
                <button className='px-20 py-3 my-3 items-center mx-auto flex border bg-[#FF971E] text-white text-base sm:text-lg rounded-xl'>Login</button>
                <p className='text-center'>Don't have an account? <Link to='/signup' className='text-[#FF971E]'>Sign up</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Login