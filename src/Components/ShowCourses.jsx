import React, {useState } from 'react'
import { Collapse } from 'react-bootstrap'
import '../css/Education.css'

const ShowCourses = ({name,length,description}) => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <button className="Education-name" onClick={() => setOpen(!open)}>{name}</button>
        <Collapse in={open}>
          <div>
        <div className='Education-content'>
        <div className="Education-length">{length}</div>
        <div className="Education-description">{description}</div>
          </div>
        </div></Collapse>
        <div className="separation-line"></div>
    </>
  )
}

export default ShowCourses