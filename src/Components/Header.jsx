import React from 'react'
import Navbar from './Navbar';
import '../css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
    <p>Här vill vi kanske ha en logga? Och såklart fixa styling - precis som med footern</p>
    <h2><Link to="/Home"> Benzen Education</Link></h2>
    <Navbar/>
    </div>
  )
}

export default Header