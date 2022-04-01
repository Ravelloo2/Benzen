import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [Educations, setEducations] = useState([])
  const [Courses, setCourses] = useState([])
  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/education/AllEducation");
    setEducations(res.data)
  }, [])
  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/education/AllCourses");
    setCourses(res.data)
  }, [])


  return (
    <div className="landingpage">
      <div className="first-content">
        <div className="first-main-content">
        <div className="hero-page">
            <h1>Benzen Education</h1>
            <h4>Vi är en av sveriges största skolor</h4>
            <Link to="/ansoka"><button className='hero-button'>ANSÖK TILL OSS!</button></Link>
          </div>
        </div>
      </div>
      <div className="secondary-content">
        <h1 style={{textAlign:'center',gridColumn:'1 / -1'}}>INFORMATION</h1>
        <div className="sidebar-container">
        <div className="left-side-content">
          <h1>TILLGÄNGLIGA UTBILDNINGAR</h1>
          {Educations.map(x => {
            return (
              <h3 style={{textTransform:'uppercase'}}>{x.name}</h3>
            )
          })}
          <Link to='/utbildningar'><h3>Läs mer</h3></Link>
      </div>
        <div className="right-side-content">
          <h1>TILLGÄNGLIGA KURSER</h1>
          {Courses.map(x => {
            return (
              <h3 style={{textTransform:'uppercase'}}>{x.name}</h3>
            )
          })}
          <Link to='/kurser'><h3>Läs mer</h3></Link>
        </div>
      </div>
      <div className="third-content">
        <div className="third-main-content">Third section</div>
      </div>
    </div>
    </div>
  )
}

export default Home
    {/* <h2>Välkommen till Benzen Education</h2>
    <p>Om det här är startsidan behöver vi kanske lite info om skolan.<br/>
    Ska vi ha någon slags Aktuell info typ om ansökningsdatum osv?<br/>
    Någon nice bild? */}
