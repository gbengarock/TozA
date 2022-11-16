import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Header from './Header'
import tozilla from '../assets/Tozilla.png'

const Register = () => {
    const [email, setEmail] = useState('')
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
    });
  });
       
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/verify')
    }

    const handleClick = () => {
        
    }

    
        
  return (
    <div className='w-full flex sm:bg-[#D7D7D7]'>
        <div className='w-[90%] items-center mx-auto my-10'>
            <div>
                {isMobile ? '' : <Header />}
            </div>
            <div className='bg-white/80 sm:w-[60%] mx-auto sm:p-10 sm:mt-10'>
                <BiArrowBack size={30} className='sm:hidden' />
                

                <h1 className='text-2xl font-semibold my-2 sm:text-center'>Create your account</h1>
                
                <form onSubmit={handleSubmit} className='text-xs my-4'>
                <div className='flex flex-col my-2'>
                        <label className='my-1'>Country</label>
                        <input className='p-2 border rounded-lg' type='text' placeholder='Nigeria' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>First Name</label>
                        <input className='p-2 border rounded-lg' type='text' placeholder='First name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Last Name</label>
                        <input className='p-2 border rounded-lg' type='text' placeholder='Last name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Business Name</label>
                        <input className='p-2 border rounded-lg' type='text' placeholder='Business name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-lg' type='email' name={email} placeholder='Email address' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Phone</label>
                        <input className='p-2 border rounded-lg' type='number' placeholder='Phone number' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Password</label>
                        <div className='flex'>
                            <input className='p-2 border w-full rounded-lg' type='password' placeholder='1234abcd' />
                            {/* <AiFillEyeInvisible onClick={handleClick} className='relative right-5 top-3' /> */}
                        </div>
                    </div>
                    
                    <p className='mt-5'>What type of business do you own?</p>
                    <div className='flex my-2'>
                        <p><input type='radio' name='biztype' className='mr-3' /></p>
                        <div className=''>
                            <p>Business to Customer</p>
                            <p className='my-1'>I market my business directly to end users</p>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <p><input type='radio' name='biztype' className='mr-3' /></p>
                        <div className=''>
                            <p>Business to Business</p>
                            <p className='my-1'>I market my business directly to other businesses</p>
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <p><input type='checkbox' className='mr-3' /></p>
                        <div className=''>
                            <p>I consent to the collection and processing of my personal data in line with data regulations as described in the Tozilla Policy</p>
                        </div>
                    </div>
                                    
                    <button onClick={handleClick} className='px-20 py-3 my-5 items-center sm:items-start mx-auto flex bg-[#FF971E] text-white text-xs rounded-xl'>Create Account</button>
                    
                    <p className='text-xs text-center sm:hidden'>Already have an account? </p>
                    
                    <button className='sm:hidden px-20 py-3 my-3 items-center mx-auto flex border text-[#FF971E] text-xs rounded-xl'>Login to account</button>
                    
                    <p className='my-10 text-sm font-semibold'>By clicking the 'Create account' button, you agree to Tozilla's <Link to='/' className='text-[#1F55E1]'>terms of acceptance use.</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register