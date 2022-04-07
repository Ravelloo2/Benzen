// // Det här bara Eliaz Kod

import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

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

// import React, { useState } from 'react'
// import '../css/login.css'

// const Login = () => {
//     const [errorMessages, seterrorMessages] = useState({})
//     const [isSubmitted, setisSubmitted] = useState(false)

//     const dataBase = [
//         {
//             username: "user1",
//             password: "pass1"
//         },
//         {
//             username: "user2",
//             password: "pass2"
//         }
//     ];

//     const errors = {
//         uname: "Felaktigt användarnamn",
//         pass: "Felaktigt lösenord"
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const { uname, pass } = document.forms[0];

//         const userData = dataBase.find((user) => user.username === uname.value);

//         if (userData) {
//             if (userData.password !== pass.value) {
//                 seterrorMessages({ name: "pass", message: errors.pass });
//             } else {
//                 setisSubmitted(true);
//             }
//         } else {
//             seterrorMessages({ name: "uname", message: errors.uname });
//         }
//     };

//     const renderErrorMessage = (name) => name === errorMessages.name && ( <div className='error'>{errorMessages.message}</div> );

//     const renderForm = (
//         <div>
//             <div className='title'>Logga In</div>
//             <form className='form-login' onSubmit={handleSubmit}>
//                     <label className='label-login'>Användarnamn</label>
//                     <input type="text" name='uname' className='user-pass' required />
//                     {renderErrorMessage("uname")}
//                     <label className='label-login'>Lösenord</label>
//                     <input type="password" name='pass' className='user-pass' required />
//                     {renderErrorMessage("pass")}
//                 <div className='btn-container'>
//                     <input type="submit" className='submit-input' />
//                 </div>
//             </form>
//         </div>
//     )

//   return (

//     <div className='sign-in-container'>
         
//           <div className='login-form'>
              
//               {isSubmitted ? <><h1 className='logged-in'> Du är nu inloggad</h1><div>
//                 <button className='btn-logout'>Logga ut</button>
//               </div></> : renderForm}
//           </div>

//           <div>
//           </div>
//     </div>
//       )
//     }
    
//     export default Login    