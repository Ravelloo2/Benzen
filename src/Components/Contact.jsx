/*PETRA gjort*/

import React, { useState } from "react";
import ContactForm from "./ContactForm";
import '../css/Contact.css';

const Contact = () => {
  const [messages, updateMessages] = useState([]);

    const sendMessage = (contact) => {
      updateMessages([...messages, contact]);
    };
    
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <h1>Kontakta oss!</h1>
        <section>
          Har du en fråga om våra utbildningar? <br />
          Eller är du intresserad av att arbeta eller utbilda hos oss?
          <p>Ring, maila eller besök oss</p>
        </section>
      <div className="contact-form">
        <p>Du kan också kontakta oss genom det här formuläret</p>
        <ContactForm sendMessage={sendMessage}/>
      </div>
      </div>
    </div>
  );
};

export default Contact;
