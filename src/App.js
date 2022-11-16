import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import VerificationCode from './components/VerificationCode';
import Verified from './components/Verified';
import Verify from './components/Verify';

function App(){
//   const [email, setEmail] = useState('')
//   const navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     navigate('/verify')
// }

// const handleClick = () => {
    
// }
  return (
    <>
          <Routes>
                <Route path='/' element={<Register  />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/verify/code' element={<VerificationCode />} />
                <Route path='/verified' element={<Verified />} />
            </Routes>
        
        
    </>
  )
}

export default App