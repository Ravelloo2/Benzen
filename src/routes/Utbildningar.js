import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Education.css'
import ShowEducation from '../Components/EducationComponents/ShowEducation';
import ShowCourses from '../Components/EducationComponents/ShowCourses';
import { Link } from 'react-router-dom';

function Utbildningar() {
  
  axios.defaults.baseURL = "http://localhost:3001/education";
            
  const [Educations, setEducations] = useState([])
  const [Courses, setCourses] = useState([])
// skriv om till funktioner med useeffect och sen kalla dom i slutet
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
    <div className='utbildningar-first-wrapper'>
      <div className="utbildningar-first">
        <div className="left-side">
      <h1>VÅRA UTBILDNINGAR</h1>
      <div className="separation-line"></div>
      <div className="Education-grid">
      {Educations.map(x => {
        return (
          <div key={x._id}>
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

      <h1>FRIA KURSER</h1>
      <div className="separation-line"></div>
      <div className="Education-grid">
        {Courses.map(y => {
          return (
            <div key={y._id}>
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
  <Link to="/skapaUtbildning">Skapa utbildning</Link>
  </div>
  <div className="utbildningar-secondary">
  <div className="utbildningar-secondary-content">
      <h1 style={{color:'black'}}>KONTAKTA STUDIE & YRKESVÄGLEDARE</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h3>Osäker på vad du ska välja? <br/> Kontakta oss för att hitta det som passar just dig!</h3>
      <Link to="/kontakta"><h3 style={{display:'inline-flex'}}>Läs Mer...</h3></Link></div>
      <div style={{width:'80%',margin:'0 0 50px 0'}} className="separation-line"></div>

      <h1 style={{color:'black'}}>UTBILDNINGSKRAV</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h3>Osäker på om du har rätt behörighet? <br/> Kontakta oss så hjälper vi dig!</h3>
      <Link to="/kontakta"><h3 style={{display:'inline-flex'}}>Läs Mer...</h3></Link></div>
      <div style={{width:'80%',margin:'0 0 50px 0'}} className="separation-line"></div>

      <h1 style={{color:'black'}}>F.A.Q</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h2 style={{color:'black',margin:'0 0 15px 0'}}>Plats?</h2>
      <h4>Stockholm & Göteborg</h4>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <h2 style={{color:'black',margin:'0 0 15px 0'}}>Krav?</h2>
      <h4>Alla utbildningar har olika krav <br/> Vi samarbetar med olika komvux för att hjälpa studenter att komma in</h4>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      </div>
    </div>
    </div>
    <div className="utbildningar-third">
      <div className="utbildningar-third-content"></div>
    </div>
  </div>
  )
}

export default Utbildningar
{/* {Educations.map((Education) => { return (<div style={{display:'inline-block', margin:'10px'}}>{Education.name} - {Education.educationLeader} - {Education.courses} - {Education.description} </div>)})} */}