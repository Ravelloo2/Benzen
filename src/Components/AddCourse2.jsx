import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddCourse2 (props) {
  axios.defaults.baseURL = "http://localhost:3001";


  const [submitMessage, setSubmitMessage] = useState(false);

  const [course, setCourse] = useState({
    name: "",
    length: "",
    description: "",
    teacher:""
  });
  function handleChange(event){
    const {name, value} = event.target;
    setCourse(prevCourse => {
      return {
        ...prevCourse,
        [name]: value
      };
    });
  }

  /*
function submitCourse(event) {
    props.onAdd(course);
    setCourse({
      name: "",
      length:"",
      description:""
    })
    event.preventDefault();
  }*/


  
  async function submitCourse(event) {
    event.preventDefault();
    await axios.post("/courses", {
      name: course.name,
      length: course.length,
      description: course.description,
      teacherId: course.teacherId,
    }).then((res) => console.log(res.data))
    setCourse({
      name: "",
      length:"",
      description:"",
      teacher:""
    })
    setSubmitMessage(true);
}
  



  return (
 <div className="courses">
  <div className="course-header">
        <h2>Lägg till ny kurs</h2>
        <button className="linkPara">
          <Link to="/Courses">Tillbaka till Kurser</Link>
        </button>
      </div>
      
      <form className="add-course-form" onSubmit={submitCourse}>
        <label className="courseLabel">Kursnamn:</label>
        <input
        id="kurs"
          name="name"
          type="text"
          className="courseName"
          value={course.name}
          onChange={handleChange}></input>
          <br/>

        <label className="courseLabel">Längd:</label>
        <input
        id="kurs"
          name="length"
          type="number"
          className="courseLength"
          value={course.length}
          onChange={handleChange}></input>
          <br/>

        <label className="courseLabel">Beskrivning:</label>
        <textarea
        id="kurs"
         name="description"
          type="text"
          className="courseDescription"
          rows={4}
          value={course.description}
          onChange={handleChange}></textarea>
          <br/>

        <label className="courseLabel">Lärare:</label>
        <input
        id="kurs"
          name="teacherID"
          type="text"
          className="courseTeacher"
          value={course.teacherId}
          onChange={handleChange}></input>
          <br/>
          <button className="add-course-btn" onClick={submitCourse}>
          Lägg till
        </button>
        <span className={submitMessage ? 'visible' : null}>Kursen har blivit tillagd</span> 
      </form>
      </div>
  )
}


export default AddCourse2;
