import React from 'react'
import { Link } from "react-router-dom"
import '../css/Courses.css'

function Courses() {
  return (
    <div className="courses">
    <div className="course-header">
    <h2>Våra kurser</h2>
    <button className="linkPara"><Link to="/AddCourse" >Lägg till ny kurs</Link></button>
    </div>
    <main className="availableCourses">
    
    <table className="course-table">
    
    <tr>
      <th className="name-row">Kursnamn</th>
      <th className="length-row">Längd</th>
      <th className="dec-row">Beskrivning</th>
    </tr>
    <tr>
        <td className="course-name">Kurs 1</td>
        <td className="course-length">4</td>
        <td className="course-desc">Kurs 1 är 4 veckor lång</td>
    </tr>
    
    </table>
    </main>

    </div>
  )
}

export default Courses