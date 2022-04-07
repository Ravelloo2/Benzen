/* Jontes */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../css/Education.css'
import { Link } from 'react-router-dom'



const CreateEducation = () => {
  const [utbildningsledare,setUtbildningsledare] = useState([])
  const [kurser,setKurser] = useState([])
  
  const [createdUtbildning, setCreatedUtbildning] = useState([{
    name: "",
    educationLeader:"",
    length:"",
    place:"",
    points:"",
    courses:[],
    description:"",
  }]);
  axios.defaults.baseURL = "http://localhost:3000/";
 useEffect(async () => {
    await axios.get("education/AllCourses")
    .then((res) => {
      console.log(kurser)
      setKurser(res.data)})
  }, [])

    useEffect(async () => {
        await axios.get("personal/AllPersonal")
        .then((res) => {
          console.log(utbildningsledare)
          setUtbildningsledare(res.data)})
      }, [])

      useEffect(async() => {
        console.log(createdUtbildning)
    },[createdUtbildning])
    
      const onAnyChange = e => {
        setCreatedUtbildning((data) => ({
          ...data,
          [e.target.name]: e.target.value,
        }));  
      }

      const Submitted = e => {
          e.preventDefault()
          axios
          .post("/education/createEducation", createdUtbildning)
          .then((res) => {
            setCreatedUtbildning({
              name:"",
              educationLeader:"",
              length:"",
              place:"",
              points:"",
              courses:[],
              description:"",
            });
            console.log(res.data) })
            .catch((err) => {
                console.log(" Error");
                console.log(err.message);
              });
      }
  return (
    <>
    <div className="create-utbildning-background">
        <div className="">
            <form onSubmit={Submitted} noValidate>
              <div className="create-utbildning-form-div">
                <div className="create-utbildning-header-div">
                <h1 className='header-h1'>Skapa Utbildning</h1>
                <Link to="/utbildningar" style={{color:'white'}}><button className="create-utbildning-back-button">X</button></Link>
                </div>
                <input type="text" name="name" value={createdUtbildning.name} onChange={onAnyChange} placeholder='Utbildningsnamn'/>
                <select value={createdUtbildning.educationLeader} name="educationLeader"  onChange={onAnyChange}>
                    <option  selected disabled>Välj Utbildningsledare..</option>
                {utbildningsledare.map(x => {return (<option key={x._id}>{x.fName} {x.lName} </option>)})}
                </select>
                <select name="length" value={createdUtbildning.length}
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
            <select value={createdUtbildning.place} name="place" onChange={onAnyChange}>
                <option selected disabled>Välj Plats..</option>
                <option>Klassrum</option>
                <option>Distans</option>
            </select>
            <input type="number" name="points" id="" placeholder="Poäng" onChange={onAnyChange} />
            <select name="courses" onChange={onAnyChange} value={createdUtbildning.courses}>
              <option selected disabled>Välj Kurs..</option>
            {kurser.map(x => {return (<option key={x._id}>{x.name}</option>)})}</select>
            <textarea name="description" onChange={onAnyChange} value={createdUtbildning.description} type="text" placeholder='Beskrivning'/>
            <input type="submit" value="Skapa Utbildning"/>
            </div>
            </form>
        </div>
    </div>
    </>
  )
  }

export default CreateEducation