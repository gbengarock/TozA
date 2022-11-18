import React from 'react'
import {BsCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import active1 from '../assets/active1.png'
import active2 from '../assets/active2.png'
import inactive1 from '../assets/inactive1.png'
import inactive2 from '../assets/inactive2.png'

const SignupNav = () => {
  return (
    <div className=''>
        <div className='w-[90%] flex items-center justify-center mx-auto my-5'>
            <div className='mr-10'>
                <img src={active1} alt='/' className='mx-auto' />
                <Link to='/business-info'>Business Info</Link>
            </div>
            <div>
                <img src={inactive2} alt='/' className='mx-auto' />
                <Link to='/business-info'>Personal Info</Link>
            </div>
        </div>
    </div>
  )
}

export default SignupNav