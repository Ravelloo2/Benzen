import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './auth';

function Navbar() {
  const auth = useAuth();

  return (
    <nav className='navBar'> 
    <div className='visible-links'></div>
    <Link className='navBar-content' to="/utbildningar" >Utbildningar</Link> | 
    <Link className='navBar-content' to="/Kurser" >Kurser</Link> |
    <Link className='navBar-content' to="/personal" >Personal</Link> |
    <Link className='navBar-content' to="/ansoka" >Ansöka</Link> |
    <Link className='navBar-content' to="/kontakta" >Kontakta</Link> |
    {!auth.user && (
        <Link className='navbar-content' to="/login">
          Logga in
        </Link>
      )}
  </nav>
 
)
  
}

export default Navbar;