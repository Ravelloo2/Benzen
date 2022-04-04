import React, {useRef, useState} from "react";
import emailjs, { init } from '@emailjs/browser';
init("w0pMHdTXTuQAA31pT");

function ContactForm({sendMessage}) {

  const form = useRef();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log(contactInfo);
    sendMessage(contactInfo);
    setContactInfo({ name: "", email: "",subject: "", message: "" });
    emailjs.sendForm('service_4b7c356', 'template_os3m0vc', form.current, 'w0pMHdTXTuQAA31pT')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
    setEmailSent(true);

  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={handleSubmit}>
        <label className="contact-label">Ditt Namn:</label>
        <br />
        <input
          className="contact-form-input"
          type="text"
          name="name"
          value={contactInfo.name}
          required
          onChange={handleChange}
        ></input>
        <br />
        <label className="contact-label">En E-mail vi kan nå dig på:</label>
        <br />
        <input
          className="contact-form-input"
          type="email"
          name="email"
          value={contactInfo.email}
          required
          onChange={handleChange}
        ></input>
        <br />

        <label className="contact-label">Vad har du frågor om? </label>
        <br />{" "}
        <select
          className="contact-form-input"
          type="select"
          name="subject"
          value={contactInfo.subject}
          onChange={handleChange}
          required
        >
          <option>Fråga om utbildning</option>
        
        <br />{" "}
      
          <option>Intresserad av arbete</option>
        </select>{" "}
        <br />
        <label className="contact-label">Vad vill du fråga om? </label>
        <br />
        <textarea
          className="contact-form-input"
          rows="3"
          name="message"
          value={contactInfo.message}
          required
          onChange={handleChange}
        ></textarea>
        <br />
        <button
          className={emailSent ? "form-btn-hidden" : "form-btn-vis"}
          type="submit"
          value=""
        >Skicka</button>{" "}
        {/* if emailSent = true the submit-btn will be set to class form-btn-hidden */}
        <span className={emailSent ? "visible" : null}>
          Ditt meddelande har skickats och vi återkommer så snart vi kan!
        </span>{" "}
        {/* if emailSent = true the submit-messsage will be set to class visible */}
      </form>
    </div>
  );
}

export default ContactForm;
