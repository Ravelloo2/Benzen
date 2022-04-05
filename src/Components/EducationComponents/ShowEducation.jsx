import axios from 'axios';
import React, {useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../css/Education.css'

const ShowEducation = ({Educations,deleteEducation}) => {
const [open, setOpen] = useState(false);
const {
  _id,
  name,
  educationLeader,
  length,
  place,
  points,
  courses,
  description,
} = Educations  



    return ( 
      <>
        <button  className="Education-name" onClick={() => setOpen(!open)}>{name}</button>
        <Collapse in={open}>
          
        <div className='Education-content'>
          <div className="first-container">
            <div className='left-side-grid-fix'>
              
              <div className='leader-grid'>
          <label>Utbildningsledare:</label>
        <div id="leader" className="Education-Leader">{educationLeader}</div>
        </div>

        <div className='length-grid'>
        <div><label >Längd:</label>
          <div className="Education-length">{length} År</div></div>
          </div>
          
          <div className="second-container">
            <div className='place-grid'>
          <div><label >Plats:</label>
          <div className="Education-place">{place}</div></div>
            </div>
              
              <div className='points-grid'>
          <label >Poäng:</label>
          <div className="Education-points">{points} Yh Points</div></div>
           </div>
          </div>
          </div>
          <div className="third-container">
          <div className='courses-grid'>
          <label className="Education-Courses" >Kurser:</label>
        <div >{courses}</div></div>

            <div className='description-grid'>
        <label className="Education-description">Beskrivning:</label>
        <div>{description}</div>
        </div>
          </div>
          <button className='Education-button'><Link to='/kontakta'>Läs Mer om kraven för utbildning...</Link></button>
        <button  name={_id} onClick={deleteEducation}>DELETE</button>
        </div></Collapse>
        <div className="separation-line"></div>
      </>
  )
}

export default ShowEducation