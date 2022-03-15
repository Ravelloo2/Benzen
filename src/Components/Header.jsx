import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>Header
            Beder Danskman
      <nav className='navBar'> 
        <Link to="/ansoka" >Ansöka</Link> | 
        <Link to="/kurser" >Kurser</Link> |
        <Link to="/personal" >Personal</Link> |
        <Link to="/utbildningar" >Utbildningar</Link> 
      </nav>
    </div>
  )
}

export default Header