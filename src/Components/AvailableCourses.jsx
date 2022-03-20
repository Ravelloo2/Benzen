import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const api = "http://localhost:3001/courses"

const AvailableCourses = () => {
const [courses, setCourses] = useState("");
  
    const getCourses = async()=> {
      const response = await axios.get(`${api}/showCourses`);
      setCourses(response.data)
    }
    useEffect(()=> {
      getCourses();
  
    }, [])
       
    useEffect(()=> {
      getCourses();
      console.log(courses)
    }, [])
       
  return (
    <div className="courses">
      <div className="course-header">
        <h2>Våra tillgängliga kurser</h2>
        <button className="linkPara">
          <Link to="/AddCourse">Lägg till ny kurs</Link>
        </button>
      </div>
      
    
      <div className="course-table">
          <label>Kursnamn:</label>
          <label>Längd på kurs:</label>
          <label>Beskrivning:</label>
        </div>
      
      <div className="availableCourses">
        {
          
          courses && courses.map(course=> {
            return(
              <div className="show-course" key={course._id}>
            <p className="course-name">{course.name}</p>
            <p className="course-length">{course.length}</p>
            <p className="course-desc">{course.description}</p>
            <button>Uppdatera</button>
            <button>Ta bort</button>
            </div>
            )
          })
        }
      </div>

      </div>
   
  )
}
  export default AvailableCourses;