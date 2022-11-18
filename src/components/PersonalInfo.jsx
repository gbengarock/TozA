import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import active2 from '../assets/active2.png'
import inactive1 from '../assets/inactive1.png'

const PersonalInfo = () => {
    const [email, setEmail] = useState('')
   
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/verify')
    }

    const handleClick = () => {
        
    }

    
        
  return (
    <div className='w-full'>
        
        <div className='w-[90%] items-center mx-auto my-10'>
            
            <div className='bg-white sm:w-[329px] md:w-[528px] mx-auto text-[#434343] sm:p-10 sm:mt-10 sm:border border-[#434343]'>
            
                <h1 className='text-2xl text-black sm:text-3xl font-bold my-5 sm:text-center'>Create your account</h1>
                <div className='w-[90%] flex items-center justify-center mx-auto my-5'>
                    <div className='mr-10 sm:flex items-center'>
                        <Link to='/signup'><img src={inactive1} alt='/' className='mx-auto my-2' /></Link>
                        <Link to='/signup' className='bg-[#FCFCFC] p-2'>Business Info</Link>
                    </div>
                    <div className='sm:flex items-center'>
                        <Link to='/personal-info'><img src={active2} alt='/' className='mx-auto my-2' /></Link>
                        <Link to='/personal-info' className='bg-[#F6F6F6] p-2'>Personal Info</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='text-base text-[#292929] my-5'> 
                
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Full Name</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='First name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Phone</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='number' placeholder='Phone number' />
                    </div>
                                        
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-lg text-[#9F9F9F]' type='email' name={email} placeholder='Email address' />
                    </div>
                    
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Password</label>
                        <div className='flex'>
                            <input className='p-2 border w-full rounded-lg text-[#9F9F9F]' type='password' placeholder='1234abcd' />
                            {/* <AiFillEyeInvisible onClick={handleClick} className='relative right-5 top-3' /> */}
                        </div>
                    </div>
                    
                    <p className='my-10 text-sm font-semibold'>By clicking the 'Create account' button, you agree to Tozilla's <Link to='/' className='text-[#FF971E]'>terms of acceptance use.</Link></p>
                                                        
                    <button onClick={handleClick} className='px-20 py-3 my-5 items-center sm:items-start mx-auto flex bg-[#FF971E] text-white text-base sm:text-lg rounded-xl'>Create Account</button>
                    
                    <p className='text-xs text-center sm:hidden'>Already have an account? </p>
                    
                    <button className='sm:hidden px-20 py-3 my-3 items-center mx-auto flex border text-[#FF971E] text-base sm:text-lg rounded-lg'>Login to account</button>
                    
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo