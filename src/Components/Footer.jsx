/* Jontes */
import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';

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
// <footer>
// <p>Här i footern får vi komma på något roligt och relevant att ha</p>
// <p>Och självklart fixa styling sen. 
// Det här ligger bara för att vi ska se den och komma ihåg att fixa :)</p>
// </footer>