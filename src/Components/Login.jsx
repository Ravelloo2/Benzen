// // Det här bara Eliaz Kod

import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import '../css/login.css'

const Login = () => {
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        auth.login(pass)
        navigate(redirectPath, { replace: true })
    }
  return (
    <div className='login-form'>
        <label className='label-input'> Användarnamn: </label>
            <input type='text' onChange={(e) => setuser(e.target.value)} />
        <label className='label-input'> Lösenord: </label>
        <input type='password' onChange={(e) => setpass(e.target.value)} />
        <button onClick={handleLogin} className='login-btn' >Login</button>
    </div>
  )
}

export default Login 