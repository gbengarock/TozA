import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const Register = () => {
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
                
                <form onSubmit={handleSubmit} className='text-base text-[#292929] my-5'> 
                <div className='flex flex-col my-2'>
                        <label className='my-1'>Country</label>
                        <select className='p-2 rounded-lg border text-[#292929]'>
                            <option defaultValue={true}>Nigeria</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>First Name</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='First name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Last Name</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='Last name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Business Name</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='Business name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-lg text-[#9F9F9F]' type='email' name={email} placeholder='Email address' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Phone</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='number' placeholder='Phone number' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Password</label>
                        <div className='flex'>
                            <input className='p-2 border w-full rounded-lg text-[#9F9F9F]' type='password' placeholder='1234abcd' />
                            {/* <AiFillEyeInvisible onClick={handleClick} className='relative right-5 top-3' /> */}
                        </div>
                    </div>
                    
                    
                    <div className='flex my-4'>
                        <p><input type='checkbox' className='mr-3' /></p>
                        <div className=''>
                            <p>I consent to the collection and processing of my personal data in line with data regulations as described in the Tozilla Policy</p>
                        </div>
                    </div>
                                    
                    <button onClick={handleClick} className='px-20 py-3 my-5 items-center sm:items-start mx-auto flex bg-[#FF971E] text-white text-base sm:text-lg rounded-xl'>Create Account</button>
                    
                    <p className='text-xs text-center sm:hidden'>Already have an account? </p>
                    
                    <button className='sm:hidden px-20 py-3 my-3 items-center mx-auto flex border text-[#FF971E] text-base sm:text-lg rounded-lg'>Login to account</button>
                    
                    <p className='my-10 text-sm font-semibold'>By clicking the 'Create account' button, you agree to Tozilla's <Link to='/' className='text-[#FF971E]'>terms of acceptance use.</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register