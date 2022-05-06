/* Jontes */
import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';


// Simpel footer som bara länkar till de olika komponenterna
function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-container">
      <div className="footer-links">
      <Link className="links" to="/utbildningar">UTBILDNINGAR</Link>
      <Link className="links" to="/kurser">KURSER</Link>
      <Link className="links" to="/personal">PERSONAL</Link>
      <Link className="links" to="/ansoka">ANSÖKA</Link>
      <Link className="links" to="/kontakta">KONTAKTA</Link>
      <Link className="links" to="/kontakta">JOBB</Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer
