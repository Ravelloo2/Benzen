import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Education.css'
import ShowEducation from '../Components/ShowEducation';

function Utbildningar() {
  
  axios.defaults.baseURL = "http://localhost:3001/education";
            
  const [Educations, setEducations] = useState([])

  useEffect(async () => {
    const res = await axios.get("/AllEducation");
    setEducations(res.data)
  }, [])
  
  useEffect(async () => {
    console.log(Educations)
  }, [Educations])
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>UTBILDNINGAR</h1>
      <div className="Education-grid">
      {Educations.map(x => {
        return (
          <div style={{marginTop:'50px'}}>
        <ShowEducation
          name={x.name}
          educationLeader={x.educationLeader}
          courses={x.courses}
          description={x.description}
        />
        </div>)
      } 
      )}
      
    </div>
  </div>
  )
}

export default Utbildningar
{/* {Educations.map((Education) => { return (<div style={{display:'inline-block', margin:'10px'}}>{Education.name} - {Education.educationLeader} - {Education.courses} - {Education.description} </div>)})} */}