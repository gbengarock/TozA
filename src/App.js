import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import ResetSuccess from './components/ResetSuccess';
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
    <Header />
          <Routes>
                <Route path='/signup' element={<Register  />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/verification-code' element={<VerificationCode />} />
                <Route path='/verified' element={<Verified />} />
                <Route path='/login' element={<Login />} />
                <Route path='/password-forget' element={<ForgetPassword />} />
                <Route path='/password-reset' element={<ResetPassword />} />
                <Route path='/reset-successful' element={<ResetSuccess />} />
            </Routes>
        
        
    </>
  )
}

export default App