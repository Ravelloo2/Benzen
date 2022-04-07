/* Jontes */
import React, {useState } from 'react'
import '../../css/Education.css'

const ShowCourses = ({displaycourses}) => {
  const {
    name,
    length,
    description
  } = displaycourses
    const [CourseCollapse, setCourseCollapse] = useState(false)
  // 
  return (
    <>
    <button className="Education-name" onClick={() => setCourseCollapse(!CourseCollapse)}>{name}</button>
    <div className="separation-line"></div>
    {CourseCollapse ? (
    <>
      <div>
        <div className='Education-content'>
        <div className="Education-length">{length}</div>
        <div className="Education-description">{description}</div>
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