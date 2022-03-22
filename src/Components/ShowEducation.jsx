import React from 'react'
import '../css/Education.css'
const ShowEducation = ({name,educationLeader,courses,description}) => {
    return (
      <>
      <div className="showEducation-grid">
      <div className="Education-name"> {name}</div>
      <div className="Education-Leader">{educationLeader}</div>
      <div className="Education-Courses">{courses}</div>
      <div className="Education-description">{description}</div>
      <div className="separation-line"></div>
      </div>
      </>
  )
}

export default ShowEducation