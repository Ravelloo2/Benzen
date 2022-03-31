import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Education.css'
import ShowEducation from '../Components/ShowEducation';
import ShowCourses from '../Components/ShowCourses';

function Utbildningar() {
  
  axios.defaults.baseURL = "http://localhost:3001/education";
            
  const [Educations, setEducations] = useState([])
  const [Courses, setCourses] = useState([])

  useEffect(async () => {
    const res = await axios.get("/AllEducation");
    setEducations(res.data)
  }, [])
  useEffect(async () => {
    const res = await axios.get("/AllCourses");
    setCourses(res.data)
  }, [])
  
  useEffect(async () => {
    console.log(Educations)
  }, [Educations])
  
  return (
    <div>
      <div className="utbildningar-container">
        <div className="left-side">
      <h1 style={{fontFamily: 'Rajdhani' }}>VÅRA UTBILDNINGAR</h1>
      <div className="separation-line"></div>
      <div className="Education-grid">
      {Educations.map(x => {
        return (
          <div>
        <ShowEducation
          name={x.name}
          educationLeader={x.educationLeader}
          length={x.length}
          place={x.place}
          points={x.points}
          courses={x.courses}
          description={x.description}
          />
        </div>)
      } 
      )}
      </div>
      </div>
      <div className="right-side">

      <h1 style={{fontFamily: 'Rajdhani' }}>FRIA KURSER</h1>
      <div className="separation-line"></div>
      <div className="Education-grid">
        {Courses.map(y => {
          return (
            <div>
              <ShowCourses 
              name={y.name}
              length={y.length}
              description={y.description}
              />
            </div>
          )
        })}

      </div>
    </div>
  </div>
  </div>
  )
}

export default Utbildningar
{/* {Educations.map((Education) => { return (<div style={{display:'inline-block', margin:'10px'}}>{Education.name} - {Education.educationLeader} - {Education.courses} - {Education.description} </div>)})} */}