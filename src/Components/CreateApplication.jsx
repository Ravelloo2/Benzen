import { useState } from "react";
import axios from 'axios'

function CreateApplication() {
    axios.defaults.baseURL = 'http://localhost:3000'

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Mail, setMail] = useState("");
    const [Utbildning, setUtbildning] = useState("");

    const CreateApplication = async () => {
        await axios.post('/ansoka', {
            
            
        })
    }


  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitEmail}
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <legend>ANSÖK NU!</legend>
          <input
            placeholder="Förnamn"
            onChange={handleStateChange}
            name="name"
            value={mailerState.Fname}
          />
          <input
            placeholder="Efternamn"
            onChange={handleStateChange}
            name="name"
            value={mailerState.Lname}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
            style={{ minHeight: "200px" }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send Message</button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateApplication
