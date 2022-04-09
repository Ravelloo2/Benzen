/* Jontes */
import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateEducation({_id, closedUpdate}) {
  axios.defaults.baseURL = "http://localhost:3001/education";
  const [utbildningsledare, setUtbildningsledare] = useState([]);
  const [kurser, setKurser] = useState([]);
  const [EducationsInfo, setEducationsInfo] = useState({
    name: "",
    educationLeader:"",
    length:"",
    place:"",
    points:"",
    courses:[],
    description:"",
  });
  useEffect(async() => {
    console.log(EducationsInfo)
  },[EducationsInfo])


  // hämtar datan
  useEffect(async () => {
    const res = await axios.get("/allPersonal");
    setUtbildningsledare(res.data);
  }, []);
  useEffect(async () => {
    const res = await axios.get("/AllCourses");
    setKurser(res.data);
  }, []);

  // vid submit skickar den en update(patch) request som uppdaterar förra värdet och den skriver över det förra
  const handleSubmit = (e) => {
    console.log(EducationsInfo)
    e.preventDefault();
    axios
      .patch(`/updateEducation/${_id}`, EducationsInfo)
      .then((res) => {
        setEducationsInfo({
          name: "",
          educationLeader: "",
          length: "",
          place: "",
          points: "",
          courses: [],
          description: "",
          
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onAnyChange = (e) => {
    setEducationsInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  return (
    <>
    {/* Vid submit av form så körs handleSubmit & Closedupdate funktionerna */}
            <form onSubmit={(e) => {handleSubmit(e);closedUpdate()}}>
              <div className="update-utbildning-form-div">
                <div className="update-utbildning-header-div">
                <h3 style={{color: 'white'}}>Uppdatera Utbildning</h3>
                <button onClick={closedUpdate} className="update-close-button">X</button>
                </div>
                <input type="text" name="name" value={EducationsInfo.name} onChange={onAnyChange} placeholder='Utbildningsnamn'/>
                <select value={EducationsInfo.educationLeader} name="educationLeader"  onChange={onAnyChange}>
                    <option  hidden>Välj Utbildningsledare..</option>
                    <option  disabled>Välj Utbildningsledare..</option>
                    {/* mappar ut utbildningsledare */}
                {utbildningsledare.map((x) => {return <option key={x._id}>{x.fName} {x.lName} </option>})}
                </select>
                <select name="length" value={EducationsInfo.length}
                onChange={onAnyChange}>
                    <option hidden>Längd på utbildningen..</option>
                    <option disabled>Längd på utbildningen..</option>
                    <option value='1' >1 År</option>
                    <option value='2' >2 År</option>
                    <option value='3' >3 År</option>
                    <option value='4' >4 År</option>
                    <option value='5' >5 År</option>
                    <option value='6' >6 År</option>
                </select>
            <select value={EducationsInfo.place} name="place" onChange={onAnyChange}>
                <option hidden>Välj Plats..</option>
                <option disabled>Välj Plats..</option>
                <option>Stockholm</option>
                <option>Göteborg</option>
                <option>Distans</option>
            </select>
            <input type="number" name="points" id="" placeholder="Poäng" onChange={onAnyChange} />
            <select name="courses" onChange={onAnyChange} value={EducationsInfo.courses}>
              <option hidden>Välj Kurs..</option>
              <option disabled>Välj Kurs..</option>
              {/* mappar ut kursdata */}
            {kurser.map((x) => {return <option key={x._id}>{x.name}</option>;})}</select>

            <input name="description" onChange={onAnyChange} value={EducationsInfo.description} type="text" placeholder='Beskrivning'/>
            <input type="submit" value="Uppdatera Utbildning" />
            </div>
            </form>
    </>
  )}

export default UpdateEducation;
