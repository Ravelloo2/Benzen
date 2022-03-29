import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/create-application.css';
import logo from '../Logo/Peder.png';

const AddValues = () => {

    axios.defaults.baseURL = 'http://localhost:3001/'

    const [applyFname, setFname] = useState("");
    const [applyLname, setLname] = useState("");
    const [applyEmail, setMail] = useState("");
    const [applyUtbildning, setUtbildning] = useState("");
    const [Educations,setEducations] = useState()

    const CreateApplication = async () => {
        await axios.post('/ansoka', {
            Fname: applyFname,
            Lname: applyLname,      
            Email: applyEmail,
            Utbildningar: applyUtbildning,
        }).then((res) => console.log(res.data))
    }

    useEffect(async () => {
      const res = await axios.get("/AllEducation");
      setEducations(res.data)
    }, [])


  return (
    <div className="App">
      <form className="form">
        <fieldset>
          <label>ANSÖK HÄR!</label>
          <input
            placeholder="Förnamn"
            onChange={(e) => setFname(e.target.value)}
            className="name"
            value={applyFname}/>
          <input
            placeholder="Efternamn"
            onChange={(e) => setLname(e.target.value)}
            name="name"
            value={applyLname}/>
          <input
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            name="email"
            value={applyEmail}/>
          <select
            placeholder="Välj utbildning"
            onChange={(e) => setUtbildning(e.target.value)}
            name="message"
            value={applyUtbildning}>
              <option value="" disabled selected hidden>Välj Utbildning</option>
              <option value="Nya-Westamentet">Nya Westamentet</option>
              <option value="Saab">Saab</option>
              <option value="Subaru">Subaru</option>
            </select>

          <input onClick={() => CreateApplication()} type="button" value="Skicka Ansökan" id="submitBtn"/>
        </fieldset>
      </form>

      <img className="Logo"></img>
    </div>
  );
}

export default AddValues;
