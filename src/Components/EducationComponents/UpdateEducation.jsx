import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateEducation({_id, closeHandler, updateHandler}) {
  axios.defaults.baseURL = "http://localhost:3001/education";
  const [utbildningsledare, setUtbildningsledare] = useState([]);
  const [kurser, setKurser] = useState([]);
  const [EducationsInfo, setEducationsInfo] = useState({
    name: "",
    educationLeader:"",
    length:"",
    place:"",
    points:0,
    courses:"",
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

  const submitHandler = (e) => {
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
          points: 0,
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
    <div className="utbildningar-first-wrapper">
        <div className="utbildningar-first">
            <form onSubmit={() => {submitHandler();updateHandler();closeHandler()}} noValidate>
              <div className="create-utbildning-form-div">
                <button onClick={closeHandler}>x</button>
                <h3>Uppdatera Utbildning</h3>
                <input type="text" name="name" value={EducationsInfo.name} onChange={onAnyChange} placeholder='Utbildningsnamn'/>
                <select value={EducationsInfo.educationLeader} name="educationLeader"  onChange={onAnyChange}>
                    <option selected disabled>Välj Utbildningsledare..</option>
                {utbildningsledare.map(x => {return (<option key={x._id}>{x.fName} {x.lName} </option>)})}
                </select>
                <select name="length" value={EducationsInfo.length}
                onChange={onAnyChange}>
                    <option value='1' disabled>Längd på utbildningen..</option>
                    <option value='2' >1 År</option>
                    <option value='3' >2 År</option>
                    <option value='4' >3 År</option>
                    <option value='5' >4 År</option>
                    <option value='6' >5 År</option>
                    <option value='7' >6 År</option>
                </select>
            <select value={EducationsInfo.place} name="place" onChange={onAnyChange}>
                <option selected disabled>Välj Plats..</option>
                <option>Klassrum</option>
                <option>Distans</option>
            </select>
            <input type="number" name="points" id="" value={EducationsInfo.points} onChange={onAnyChange} />
            <select name="courses" onChange={onAnyChange} value={EducationsInfo.courses}>
              <option selected disabled>Välj Kurs..</option>
            {kurser.map(x => {return (<option key={x._id}>{x.name}</option>)})}</select>
            <input name="description" onChange={onAnyChange} value={EducationsInfo.description} type="text" placeholder='Beskrivning'/>
            <input type="submit" />
            </div>
            </form>
        </div>
    </div>
    </>
  )}

export default UpdateEducation;
