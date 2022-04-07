import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateEducation({id, closeHandler}) {
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
  useEffect(async () => {
    const res = await axios.get("/allPersonal");
    setUtbildningsledare(res.data);
  }, []);
  useEffect(async () => {
    const res = await axios.get("/AllCourses");
    setKurser(res.data);
  }, []);
  const handleSubmit = (e) => {
    console.log(EducationsInfo)
    e.preventDefault();
    axios
      .patch(`/updateEducation/${id}`, EducationsInfo)
      .then((res) => {
        setEducationsInfo({
          name: "",
          educationLeader: "",
          length: "",
          place: "",
          points: "",
          courses: [""],
          description: "",
        });
        console.log(EducationsInfo);
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
    <div className="">
        <div className="">
            <form onSubmit={() => {handleSubmit();closeHandler()}}>
              <div className="update-utbildning-form-div">
                <div className="update-utbildning-header-div">
                <h3 style={{color: 'white'}}>Uppdatera Utbildning</h3>
                <button onClick={closeHandler} className="update-close-button">Tillbaka</button>
                </div>
                <input type="text" name="name" value={EducationsInfo.name} onChange={onAnyChange} placeholder='Utbildningsnamn'/>
                <select value={EducationsInfo.educationLeader} name="educationLeader"  onChange={onAnyChange}>
                    <option hidden></option>
                    <option disabled>Välj Utbildningsledare..</option>
                {utbildningsledare.map(x => {return (<option key={x._id}>{x.fName} {x.lName} </option>)})}
                </select>
                <select name="length" value={EducationsInfo.length}
                onChange={onAnyChange}>
                    <option hidden></option>
                    <option disabled>Längd på utbildningen..</option>
                    <option value='1' >1 År</option>
                    <option value='2' >2 År</option>
                    <option value='3' >3 År</option>
                    <option value='4' >4 År</option>
                    <option value='5' >5 År</option>
                    <option value='6' >6 År</option>
                </select>
            <select value={EducationsInfo.place} name="place" onChange={onAnyChange}>
                <option hidden></option>
                <option disabled>Välj Plats..</option>
                <option>Klassrum</option>
                <option>Distans</option>
            </select>
            <input type="number" name="points" id="" placeholder="Poäng" onChange={onAnyChange} />
            <select name="courses" onChange={onAnyChange} value={EducationsInfo.courses}>
              <option hidden></option>
              <option disabled>Välj Kurs..</option>
            {kurser.map(x => {return (<option key={x._id}>{x.name}</option>)})}</select>
            <input name="description" onChange={onAnyChange} value={EducationsInfo.description} type="text" placeholder='Beskrivning'/>
            <input type="submit" value="Uppdatera Utbildning" />
            </div>
            </form>
        </div>
    </div>
    </>
  )}

export default UpdateEducation;
