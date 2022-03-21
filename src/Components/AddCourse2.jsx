import React, { useState } from "react";
import axios from "axios";

const AddCourse2 = () => {
  const [course, setCourse] = useState({
    name: "",
    length: "",
    description: "",
    teacherId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setCourse({
      ...course,
      [e.target.value]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: course.name,
      length: course.length,
      description: course.description,
      teacherId: course.teacherId
    };
  

  axios.post("/", newCourse).then((response)=> {
      console.log(response.status);
      console.log(response.data)
  })
  .catch((error) => {
      if(error.repsonse) {
          console.log(error.response);
          console.log('server responded');
      }else if (error.request) {
          console.log('network error')
      } else {
          console.log(error);
      }
  });


  return (
 <div className="course-form">
  <div className="course-header">
        <h2>Lägg till ny kurs</h2>
        <button className="linkPara">
          <Link to="/Courses">Tillbaka till Kurser</Link>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label>Kursnamn:</label>
        <input
          id="kurs"
          type="text"
          className="courseName"
          value={course.name}
          onChange={onChange}></input>
          <br/>

        <label>Längd:</label>
        <input
          id="kurs"
          type="number"
          className="courseLength"
          value={course.length}
          onChange={onChange}></input>
          <br/>

        <label>Beskrivning:</label>
        <input
          id="kurs"
          type="text"
          className="courseDescription"
          value={course.description}
          onChange={onChange}></input>
          <br/>

        <label>Lärare:</label>
        <input
          id="kurs"
          type="text"
          className="courseTeacher"
          value={course.teacherId}
          onChange={onChange}></input>
          <button className="add-course-btn" onClick={() => createCourse()}>
          Lägg till
        </button>
      </form>
      </div>
  )
}
}

export default AddCourse2;
