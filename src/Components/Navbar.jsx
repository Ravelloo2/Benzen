import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navBar'> 
    <Link to="/utbildningar" >Utbildningar</Link> | 
    <Link to="/Courses" >Kurser</Link> |
    <Link to="/personal" >Personal</Link> |
    <Link to="/ansoka" >Ansöka</Link> 
  </nav>
 
)
  
}

export default Navbar;