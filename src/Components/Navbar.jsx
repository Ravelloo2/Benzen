import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navBar'> 
    <Link to="/ansoka" >Ansöka</Link> | 
    <Link to="/kurser" >Kurser</Link> |
    <Link to="/personal" >Personal</Link> |
    <Link to="/utbildningar" >Utbildningar</Link> 
  </nav>
 
)
  
}

export default Navbar;