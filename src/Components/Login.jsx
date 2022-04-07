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
        <label> 
            Username: <input type='text' onChange={(e) => setuser(e.target.value)} />
        </label>
        <label>
            Lösenord: <input type='password' onChange={(e) => setpass(e.target.value)} />
        </label>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login 