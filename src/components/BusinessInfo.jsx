import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import active1 from '../assets/active1.png'
import inactive2 from '../assets/inactive2.png'

const BusinessInfo = () => {
    const [email, setEmail] = useState('')
   
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/personal-info')
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
                        <Link to='/signup'><img src={active1} alt='/' className='mx-auto my-2' /></Link>
                        <Link to='/signup' className='bg-[#F6F6F6] p-2'>Business Info</Link>
                    </div>
                    <div className='sm:flex items-center'>
                        <Link to='/personal-info'><img src={inactive2} alt='/' className='mx-auto my-2' /></Link>
                        <Link to='/personal-info' className='bg-[#FCFCFC] p-2'>Personal Info</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='text-base text-[#292929] my-5'> 
                <div className='flex flex-col my-2'>
                        <label className='my-1'>Organization Name</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='Organization name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>CAC Registration Number</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='CAC Registration Number' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Organization Email</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='email' placeholder='Organization Email' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>organization Address</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='Organization Address' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Organization Phone Number</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-lg text-[#9F9F9F]' type='number' placeholder='Organization Phone Number' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='my-1'>Organization Website</label>
                        <input className='p-2 border rounded-lg text-[#9F9F9F]' type='text' placeholder='Organization Website' />
                    </div>
                                       
                             
                    <button onClick={handleClick} className='px-20 py-3 my-5 items-center sm:items-start mx-auto flex bg-[#FF971E] text-white text-base sm:text-lg rounded-xl'>Proceed</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default BusinessInfo