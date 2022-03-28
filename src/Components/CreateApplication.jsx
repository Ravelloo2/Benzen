import React, { useState } from "react";
import axios from 'axios'

const AddValues = () => {

    axios.defaults.baseURL = 'http://localhost:3001/'

    const [applyFname, setFname] = useState("");
    const [applyLname, setLname] = useState("");
    const [applyEmail, setMail] = useState("");
    const [applyUtbildning, setUtbildning] = useState("");

    const CreateApplication = async () => {
        await axios.post('/ansoka', {
            Fname: applyFname,
            Lname: applyLname,      
            Email: applyEmail,
            Utbildningar: applyUtbildning,
        }).then((res) => console.log(res.data))
    }

  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
        }}
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
            onChange={(e) => setFname(e.target.value)}
            className="name"
            value={applyFname}
          />
          <input
            placeholder="Efternamn"
            onChange={(e) => setLname(e.target.value)}
            name="name"
            value={applyLname}
          />
          <input
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            name="email"
            value={applyEmail}
          />
          <select
            placeholder="Välj utbildning"
            onChange={(e) => setUtbildning(e.target.value)}
            name="message"
            value={applyUtbildning}>
              <option value="utbildning" required>Välj Utbildning</option>
              <option value="volvo" required>Volvo</option>
              <option value="volvo">Saab</option>
              <option value="volvo">Subaru</option>

            </select>
          
          <input onClick={() => CreateApplication()} type="button" value="Skicka Ansökan" id="submitBtn"/>
        </fieldset>
      </form>
    </div>
  );
}

export default AddValues;
