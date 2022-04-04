import React, { useState } from 'react'
import '../css/login.css'

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    

    function validateForm() {
        return user.length > 0 && password.length > 0
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
      <div>
          <form className='login-form' onSubmit={handleSubmit}>
              <h2>Välkommen</h2>
              <label className='input-label'> Användarnamn</label>
              <input type="username" value={user} onChange={(e) => setUser(e.target.value)} className='input-login' /> 

              <label className='input-label'> Lösenord </label>   
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-login' />

              <button type='submit' disabled={!validateForm()}>Logga In</button>
          </form>
      </div>
  )

}

export default Login