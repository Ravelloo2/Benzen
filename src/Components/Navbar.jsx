import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navBar'> 
    <Link className='navBar-content' to="/utbildningar" >Utbildningar</Link> | 
    <Link className='navBar-content' to="/Kurser" >Kurser</Link> |
    <Link className='navBar-content' to="/personal" >Personal</Link> |
    <Link className='navBar-content' to="/ansoka" >Ansöka</Link> |
    <Link className='navBar-content' to="/kontakta" >Kontakta</Link> 
    <Link className='navbar-content' to='login'>Login</Link>
  </nav>
 
)
  
}

export default Navbar;