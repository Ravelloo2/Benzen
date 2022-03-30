import React, {useState } from 'react'
import { Collapse } from 'react-bootstrap'
import '../css/Education.css'

const ShowEducation = ({name,educationLeader,length,place,points,courses,description}) => {
const [open, setOpen] = useState(false);
    return ( 
      <>
        <button className="Education-name" onClick={() => setOpen(!open)}>{name}</button>
        <Collapse in={open}>
          <div>
        <div className='Education-content'>
        <div className="Education-Leader">{educationLeader}</div>
        <div className="Education-length">{length} År</div>
        <div className="Education-place">{place}</div>
        <div className="Education-points">{points} Yh Points</div>
        <div className="Education-Courses">Kurser: {courses.join(' ')}</div>
        <div className="Education-description">{description}</div>
          </div>
        </div></Collapse>
        <div className="separation-line"></div>
      </>
  )
}

export default ShowEducation