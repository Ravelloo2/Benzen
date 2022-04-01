import React from 'react'
import '../css/Footer.css'
import { FaGithub,FaLinkedin,FaInstagram,FaAddressBook,FaPhone,FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media">
        <a href=""><div className="content"><FaGithub/></div></a>
        <a href=""><div className="content"><FaLinkedin/></div></a>
        <a href=""><div className="content"><FaInstagram/></div></a>
     </div>
      <div className="contact">
        <a href=""><div className="content"><FaAddressBook/></div></a>
        <a href=""><div className="content"><FaPhone/></div></a>
        <a href=""><div className="content"><FaMailBulk/></div></a>
      </div>
    </div>
  )
}

export default Footer
// <footer>
// <p>Här i footern får vi komma på något roligt och relevant att ha</p>
// <p>Och självklart fixa styling sen. 
// Det här ligger bara för att vi ska se den och komma ihåg att fixa :)</p>
// </footer>