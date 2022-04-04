import React, {useState} from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div className="main-content">
    <h2>Kontakta oss!</h2>
    <section>
    Har du en fråga om våra utbildningar? <br/>Eller är du intresserad av att arbeta eller utbilda hos oss?
    <p>Ring, maila eller besök oss</p>
    </section>

<div><p>Du kan också kontakta oss genom det här formuläret</p>
    <ContactForm/>
    </div>
</div>
  )
}

export default Contact;