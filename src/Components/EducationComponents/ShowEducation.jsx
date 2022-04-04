import React, {useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../css/Education.css'

const ShowEducation = ({name,educationLeader,length,place,points,courses,description}) => {
const [open, setOpen] = useState(false);


    return ( 
      <>
        <button  className="Education-name" onClick={() => setOpen(!open)}>{name}</button>
        <Collapse in={open}>
        <div className='Education-content'>
          <div className="first-container">
            <div>
          <label htmlFor="leader">Utbildningsledare:</label>
        <div id="leader" className="Education-Leader">{educationLeader}</div>
        </div>
        <div><label htmlFor="">Längd:</label>
          <div className="Education-length">{length} År</div></div>
          </div>
          <div className="second-container">
          <div><label htmlFor="">Plats:</label>
          <div className="Education-place">{place}</div></div>
            <div>
          <label htmlFor="">Poäng:</label>
          <div className="Education-points">{points} Yh Points</div></div>
           
          </div>
          <div className="third-container">
          <div>
          <label htmlFor="">Kurser:</label>
        <div className="Education-Courses">{courses}</div></div>
            <div>
        <label htmlFor="">Beskrivning:</label>
        <div className="Education-description">{description}</div>
        </div>
          </div>
          <button className='Education-button'><Link to='/kontakta'>Läs Mer om kraven för utbildning...</Link></button>
        </div></Collapse>
        <div className="separation-line"></div>
      </>
  )
}

export default ShowEducation