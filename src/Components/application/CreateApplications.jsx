import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../css/apply.css";

import { Link } from "react-router-dom";

const CreateApplications = () => {
  axios.defaults.baseURL = "http://localhost:3001/";

  const [applyFname, setFname] = useState("");
  const [applyLname, setLname] = useState("");
  const [applyEmail, setMail] = useState("");
  const [applyUtbildning, setUtbildning] = useState("");
  const [Educations, setEducations] = useState([]);

  const CreateApplication = async () => {
    console.log(applyFname, applyLname, applyEmail, applyUtbildning);
    await axios
      .post("/ansoka", {
        Fname: applyFname,
        Lname: applyLname,
        Email: applyEmail,
        Utbildningar: applyUtbildning,
      })
      .then((res) => console.log(res.data));
  };

  useEffect(async () => {
    const res = await axios.get("education/AllEducation");
    setEducations(res.data);
  }, []);

  useEffect(async () => {
    console.log(Educations);
  }, [Educations]);

  return (
    <div className="App">
      <Link to="/ansoka"><button>Tillbaka till dina ansökningar</button></Link>
      <form className="form">
        <fieldset className="fieldset-apply">
          <label id="label-apply">ANSÖK HÄR!</label>
          <input
            placeholder="Förnamn"
            onChange={(e) => setFname(e.target.value)}
            id="Fname-apply"
            value={applyFname}
            required
            validationErrors={{
              isDefaultRequiredValue: "Field is required!",
            }}
          />
          <input
            placeholder="Efternamn"
            onChange={(e) => setLname(e.target.value)}
            id="Lname-apply"
            value={applyLname}
          />
          <input
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            id="email-apply"
            value={applyEmail}
          />
          <select
            name=""
            id="select-apply"
            value={applyUtbildning}
            onChange={(e) => setUtbildning(e.target.value)}
          >
            <option value='' disabled selected>Välj Utbildning...</option>
            {Educations.map((x) => {
              return <option>{x.name}</option>;
            })}
          </select>

          <input
            onClick={() => CreateApplication()}
            type="button"
            value="Skicka Ansökan"
            id="submitBtn"
          />
        </fieldset>
      </form>
      <img className="Logo"></img>
    </div>
  );
};

export default CreateApplications;
