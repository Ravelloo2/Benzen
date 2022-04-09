/* Jontes */
import React, {useState } from 'react'
import '../../css/Education.css'

const ShowCourses = ({displayCourses}) => {

  // skickar med datan från Utbildningar komponenten och här tar jag ut värdena
  const {
    name,
    length,
    description,
    location,
    teacherId,
    startDate,
  } = displayCourses
    const [CourseCollapse, setCourseCollapse] = useState(false)
    // En simpel collapse så när du trycker på en kurs så öppnas collapsen och du ser innehållet
  return (
    <>
    <button className="Kurser-name" onClick={() => setCourseCollapse(!CourseCollapse)}>{name}</button>
    <div className="separation-line"></div>
    {CourseCollapse ? (
    <>
      <div>
        <div className='Kurser-content'>
        <div className="length-and-description">
          <label>Längd:</label>
        <div className="kurser-length">{length}</div>
          <label>Beskrivning:</label>
        <div className="kurser-description">{description}</div>
        </div>
        <div className="location-and-teacher">
          <label>Plats:</label>
        <div className="kurser-description">{location}</div>
          <label>Lärare:</label>
        <div className="kurser-description">{teacherId}</div>
        </div>
        <div className="starting-date">
          <label>Startdatum:</label>
        <div className="kurser-description">{startDate.slice(0, 10)}</div>
        </div>
          </div>
        </div>
        <div className="separation-line"></div>
      </>) : 
      (<>
      </>) }
        
    </>
  )
}

export default ShowCourses