import React from 'react'
import Navbar from './Navbar';
import '../css/Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div id="header">
      <div id="header-content">
        <h2 className='header-name'><Link to="/">Benzen Education</Link></h2>
        <div className='navbar'>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header