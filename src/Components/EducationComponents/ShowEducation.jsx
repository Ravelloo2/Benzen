/* Jontes */
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/Education.css'
import UpdateEducation from './UpdateEducation';

const ShowEducation = ({Educations,deleteEducation}) => {
const [EducationsCollapse, setEducationsCollapse] = useState(false)
const [UpdateCollapse, setUpdateCollapse] = useState(false)

const [id, setId] = useState("");
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

const editHandler = (e) => {
  setId(e.target.name);
  setUpdateCollapse(true);
  setEducationsCollapse(false)
};


const closeHandler = () => {
  setId("");
  setUpdateCollapse(false);
  setEducationsCollapse(true)
};

useEffect(()=> console.log(id),[id])

    return ( 
      <>
        <button  className="Education-name" onClick={() => setEducationsCollapse(!EducationsCollapse)}>{name}</button>
        <div className="separation-line"></div>
       {EducationsCollapse ? (
         <>
        <div className='Education-content'>
          <div className="leader-and-length">
              <div className='leader-grid'>
          <label>Utbildningsledare:</label>
        <div id="leader" className="Education-Leader">{educationLeader}</div>
        </div>
        <div className='length-grid'>
        <div><label >Längd:</label>
          <div className="Education-length">{length} År</div></div>
          </div>
          </div>
          <div className="place-and-points">
            <div className='place-grid'>
          <div><label >Plats:</label>
          <div className="Education-place">{place}</div></div>
          </div>
              <div className='points-grid'>
          <label >Poäng:</label>
          <div className="Education-points">{points} Yh Points</div></div>
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
          <div className="read-more-and-buttons">
          <button className='Education-button'><Link to='/kontakta'>Kontakta oss ifall du har frågor...</Link></button>
        <div className="buttons-div">
        <button name={_id} onClick={editHandler}>Uppdatera</button>
          <button name={_id} onClick={deleteEducation}>Ta Bort</button>
          </div>
          </div>
          </div>
        </>)
        : (
          <>
        {UpdateCollapse ? 
        (<UpdateEducation _id={id} closeHandler={closeHandler} />) : (<></>)}
      </>
)} 

          </>
  )
}

export default ShowEducation