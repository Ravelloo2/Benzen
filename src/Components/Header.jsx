import React from 'react'
import Navbar from './Navbar';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import Login from './Login';

function Header() {
  return (
    <div id="header">
      <div id="header-content">
      <h2><Link to="/Home">Benzen Education</Link></h2>
    <Navbar/>
      </div>
    </div>
  )
}

export default Header