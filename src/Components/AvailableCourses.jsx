import React, { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";


const AvailableCourses = () => {
  

  axios.defaults.baseURL = "http://localhost:3001/courses";

  const [courses, setCourses] = useState("");

    const getCourses = async()=> {
      const response = await axios.get("/showCourses");
      setCourses(response.data)
     
    }
    useEffect(()=> {
      getCourses();
  
    }, [])
       
    useEffect(()=> {
      getCourses();
      console.log(courses)
    }, [])


    const handleChange = (id, key, value) => {
      setCourses(values => {
        return values.map(course => course.id === id ? { ...course, [key]: value } : course )
      })
    }

 const updateCourse =(id)=> {
      const data = courses.find(course => course.id === id)
      axios.patch(id, data).then(response => {
    console.log(response) 
      })
    }


      const deleteCourse = id => {
        id = "/" + id;
        axios.delete(id).then(response => {
          setCourses(values => {
            return values.filter(course => course.id !== id)
            })
          })
      }
       
  return (
    <div className="courses">
      <div className="course-header">
        <h2>Våra tillgängliga kurser</h2>
        <Button className="linkPara" variant="outline-light" size="sm">
          <Link to="/AddCourse">Lägg till ny kurs</Link>
        </Button>
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
            <p className="course-name" >{course.name}</p>
            <p className="course-length" >{course.length}</p>
            <p className="course-desc" >{course.description}</p>
            <Link to="/UpdateCourse">
            <Button variant="warning" size="sm" onClick={()=>updateCourse(course._id)}>Uppdatera</Button>
            </Link>
            <Button variant="danger" size="sm" mx="20px" onClick={() => deleteCourse(course._id)}>Ta bort</Button>
            </div>
            )
          })
        }
      </div>

    </div>
   
  )
      }
  export default AvailableCourses;