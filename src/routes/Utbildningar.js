import { useEffect, useState } from 'react'
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
          courses={x.courses}
          description={x.description}
          />
        </div>)
      } 
      )}
      </div>
      </div>
      <div className="right-side">

      <h1 style={{textAlign:'center',fontFamily: 'Rajdhani' }}>FRIA KURSER</h1>
      <div className="separation-line"></div>
      <div className="Education-grid">
      {Educations.map(x => {
        return (
          <div>
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
  </div>
  </div>
  )
}

export default Utbildningar
{/* {Educations.map((Education) => { return (<div style={{display:'inline-block', margin:'10px'}}>{Education.name} - {Education.educationLeader} - {Education.courses} - {Education.description} </div>)})} */}