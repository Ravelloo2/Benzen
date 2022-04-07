/* PETRA gjort*/
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import '../css/Contact.css';
import { FaPhone, FaMailBulk,FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [messages, updateMessages] = useState([]);

    const sendMessage = (contact) => {
      updateMessages([...messages, contact]);
    };
    
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <section>
        <h1>Kontakta oss!</h1>
          Har du en fråga om våra utbildningar? <br />
          Eller är du intresserad av att arbeta eller utbilda hos oss?
          <p>Ring, maila eller besök oss</p>
     
        <a href=""><div className="contact-icons"><FaPhone/></div></a>
        <a href=""><div className="contact-icons"><FaMailBulk/></div></a> 
          <a href="https://www.google.se/maps/place/JENSEN+yrkesh%C3%B6gskola+Stockholm/@59.4054842,17.9467843,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d6db302726b:0xf29c835228dcf386!8m2!3d59.4054815!4d17.948973?hl=sv" target="_blank"><div className="contact-icons"><FaMapMarkerAlt/><span className="city">Stockholm</span></div></a>
          <a href="https://www.google.se/maps/place/JENSEN+yrkesh%C3%B6gskola+G%C3%B6teborg/@57.7007513,11.953063,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff321ab4e87cf:0xd856154bc8e87514!8m2!3d57.7008256!4d11.9552819?hl=sv" target="_blank"><div className="contact-icons"><FaMapMarkerAlt/><span className="city">Göteborg</span> </div></a>


        </section>
      <div className="contact-form-container">
        <h4>Du kan också skicka ett meddelande!</h4>
        <ContactForm sendMessage={sendMessage}/>
      </div>
      </div>
    </div>
  );
};

export default Contact;
