// Det här bara Eliaz Kod

import React, { useState } from 'react'
import '../css/login.css'

const Login = () => {
    const [errorMessages, seterrorMessages] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)

    const dataBase = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "Felaktigt användarnamn",
        pass: "Felaktigt lösenord"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        const userData = dataBase.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                seterrorMessages({ name: "pass", message: errors.pass });
            } else {
                setisSubmitted(true);
            }
        } else {
            seterrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) => name === errorMessages.name && ( <div className='error'>{errorMessages.message}</div> );

    const renderForm = (
        <div>
            <div className='title'>Logga In</div>
            <form className='form-login' onSubmit={handleSubmit}>
                    <label className='label-login'>Användarnamn</label>
                    <input type="text" name='uname' className='user-pass' required />
                    {renderErrorMessage("uname")}
                    <label className='label-login'>Lösenord</label>
                    <input type="password" name='pass' className='user-pass' required />
                    {renderErrorMessage("pass")}
                <div className='btn-container'>
                    <input type="submit" className='submit-input' />
                </div>
            </form>
        </div>
    )

  return (

    <div className='sign-in-container'>
         
          <div className='login-form'>
              
              {isSubmitted ? <h1 className='logged-in'> Du är nu inloggad </h1> : renderForm}
          </div></div>
      )
    }
    
    export default Login    