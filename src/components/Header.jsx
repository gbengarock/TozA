import React from 'react'
import { Link } from 'react-router-dom'
import tozilla from '../assets/Tozilla.png'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <img src={tozilla} className='w-[70px] h-[30px] mt-2' />
            <Link to='/login' className='px-10 py-3 text-center bg-[#FF971E] text-white text-xs rounded-xl'>Login to account</Link>
        </div>
    </div>
  )
}

export default Header