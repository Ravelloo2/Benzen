import React, { useEffect, useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import '../css/Education.css'

const ShowEducation = ({name,educationLeader,courses,description}) => {
const [open, setOpen] = useState(false);
    return ( 
      <>
        <button className="Education-name" onClick={() => setOpen(!open)}>{name}</button>
        <Collapse in={open}>
        <div>
        <div className="Education-Leader">{educationLeader}</div>
        <div className="Education-Courses">{courses.join(' ')}</div>
        <div className="Education-description">{description}</div>
        </div></Collapse>
        <div className="separation-line"></div>
      </>
  )
}

export default ShowEducation