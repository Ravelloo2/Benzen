// CAMERON
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navBar'> 
    <div className='visible-links'>
    <Link className='navBar-content' to="/utbildningar" >Utbildningar</Link> | 
    <Link className='navBar-content' to="/Kurser" >Kurser</Link> |
    <Link className='navBar-content' to="/personal" >Personal</Link> |
    <Link className='navBar-content' to="/ansoka" >Ansöka</Link> |
    <Link className='navBar-content' to="/kontakta" >Kontakta</Link> |
    <Link className='navbar-content' to='login' >Logga in</Link> 
    </div>
    {/* CAMERON */}
    <div className="dropdown">
    <button className="dropbtn">Meny</button>
    <div className="dropdown-content">
    <Link className='dropdown-content' to="/utbildningar" >Utbildningar</Link> <br/>
    <Link className='dropdown-content' to="/Kurser" >Kurser</Link><br/>
    <Link className='dropdown-content' to="/personal" >Personal</Link> <br/>
    <Link className='dropdown-content' to="/ansoka" >Ansöka</Link> <br/>
    <Link className='dropdown-content' to="/kontakta" >Kontakta</Link> <br/>
    <Link className='dropdown-content' to='login' >Logga in</Link> 
    </div>
    </div>
  </nav>
 
)
  
}

export default Navbar;