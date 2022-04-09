/* Jontes */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Education.css'
import ShowEducation from '../Components/EducationComponents/ShowEducation';
import ShowCourses from '../Components/EducationComponents/ShowCourses';
import { Link } from 'react-router-dom';

function Utbildningar() {
  // Sätter default url för education så jag kan enkelt hämta mina endpoints
  axios.defaults.baseURL = "http://localhost:3001/education";
            

  // Deklarerar en del usestates för att kunna map igenom datan som jag hämtar från api och smidigt kunna hantera datan.
  const [Educations, setEducations] = useState([])
  const [Courses, setCourses] = useState([])
  const [update, setUpdate] = useState(false)
  const [searchEducation, setSearchEducation] = useState('')
  const [searchKurser, setSearchKurser] = useState('')
 

  // hämtar utbildningar och lyssnar på när update variabeln uppdateras för att kunna uppdatera sidan när jag tar bort utbildningar
  useEffect(async () => {
    const res = await axios.get("/AllEducation");
    setEducations(res.data)
  }, [update])


  // hämtar kurser från min endpoint i backend som hämtar det från Petra.
  useEffect(async () => {
    const res = await axios.get("/AllCourses");
    setCourses(res.data)
  }, [])


    // funktion för att filtrera alla utbildningar när man söker i search bar, du kan söka på massa olika information inom utbildningar, aka keywords
  const filteredEducation = x => { 
    let educationName = x.name, educationLeader = x.educationLeader,educationLength = x.length, educationPlace = x.place, educationPoints = x.points, educationDescription = x.description
      if( educationName.toLowerCase().includes(searchEducation.toLowerCase()) 
      || educationLeader.toLowerCase().includes(searchEducation.toLowerCase())
      || educationLength.toLowerCase().includes(searchEducation.toLowerCase())
      || educationPlace.toLowerCase().includes(searchEducation.toLowerCase())
      || educationPoints.toLowerCase().includes(searchEducation.toLowerCase())
      || educationPoints.toLowerCase().includes(searchEducation.toLowerCase())
      || educationDescription.toLowerCase().includes(searchEducation.toLowerCase())
      )
      {return x}
      else if(educationName == "")
        {return x}
    }

    // funktion för att filtrera alla kurser när man söker i search bar, du kan söka på massa olika information inom utbildningar, aka keywords
  const filteredKurser = y => { 
    let name = y.name,description = y.description, location = y.location, teacherId = y.teacherId
      if( name.toLowerCase().includes(searchKurser.toLowerCase()) 
      || description.toLowerCase().includes(searchKurser.toLowerCase())
      || location.toLowerCase().includes(searchKurser.toLowerCase())
      || teacherId.toLowerCase().includes(searchKurser.toLowerCase())
      )
      {return y}
      else if(name == "")
        {return y}
    }


    // delete request föra att deleta en specifik utbildning
  const deleteEducation = (e) => {
  axios.delete(`http://localhost:3001/education/delete/${e.target.name}`);
  setEducations((data) => {
    return data.filter((education) => education._id !== e.target.name);
  });
  setUpdate(true)
}

// delete request för att deleta alla utbildningar
  const deleteAllEducation = (e) => {
  axios.delete("http://localhost:3001/education/delete");
  setEducations((data) => {
    return data.filter((education) => education._id !== e.target.name);
  });
  setUpdate(true)
}


  return (
    <>
    <div>
    <div className='utbildningar-first-wrapper'>
      <div className="utbildningar-first">
        <div className="utbildningar">
          <div className="utbildningar-header">
          <h1>UTBILDNINGAR</h1>
          <div className="create-and-filter">
          <Link style={{color: 'white'}} to="/skapaUtbildning">Skapa Utbildning</Link>

          {/* Search bar som  */}
          <input type="text"  className='search-bar' onChange={(e) => setSearchEducation(e.target.value)} placeholder="Filtrera utbildningar..."/>
          </div>
          </div>
      <div className="separation-line"></div>
      <div className="Education-grid">

        {/* använder min filter funktion som jag gjorde längre upp för att kolla ifall värdet stämmer in på någon av utbildningar och då visar den de utbildningar sen använder jag map metod för att gå igenom alla utbildningar som jag hämtade från min egna endpoint och i showEducation komponenten så renderar jag ut dom */}
      {Educations.filter(x=> filteredEducation(x)).map(x => {
        return (
          <div key={x._id}>
        <ShowEducation
        Educations={x}
        deleteEducation={deleteEducation}
          />
        </div>)
      } 
      )}
      </div>
      <button className="utbildningar-removeall-button" onClick={deleteAllEducation}>Ta bort Alla</button>
      </div>
      <div className="kurser">
      <div className="utbildningar-header">
        <h1>FRIA KURSER</h1>
        <div className="create-and-filter">
        <Link style={{color: 'white'}} to="/Kurser">Hantera Kurser</Link>

        <input type="text"  className='search-bar' onChange={(e) => setSearchKurser(e.target.value)} placeholder="Filtrera kurser..."/>
        </div>
        </div>
      <div className="separation-line"></div>
      <div className="Education-grid">
                {/* använder min filter funktion som jag gjorde längre upp för att kolla ifall värdet stämmer in på någon av kurserna och då visar den de utbildningar sen använder jag map metod för att gå igenom alla utbildningar som jag hämtade från min egna endpoint och i showCourses komponenten så renderar jag ut dom */}
        {Courses.filter(y => filteredKurser(y)).map(y => {
          return (
            <div key={y._id}>
              <ShowCourses 
              displayCourses={y}
              />
            </div>
          )
        })}
    </div>
    </div>
  </div>
  </div>
  </div>
  

  {/* Random filler content om Benzen education :3 */}
  <div className="utbildningar-secondary">
  <div className="utbildningar-secondary-content">
      <h1 style={{color:'black'}}>KONTAKTA STUDIE & YRKESVÄGLEDARE</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h3>Osäker på vad du ska välja? <br/> Kontakta oss för att hitta det som passar just dig!</h3>
      <Link to="/kontakta"><h3 style={{display:'inline-flex'}}>Läs Mer...</h3></Link></div>
      

      <h1 style={{color:'black'}}>UTBILDNINGSKRAV</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h3>Osäker på om du har rätt behörighet? <br/> Kontakta oss så hjälper vi dig!</h3>
      <Link to="/kontakta"><h3 style={{display:'inline-flex'}}>Läs Mer...</h3></Link></div>
      
      <h1 style={{color:'black'}}>F.A.Q</h1>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      <div className="utbildningar-secondary-content-content">
      <h2 style={{color:'black',margin:'0 0 15px 0'}}>Plats?</h2>
      <h4>Stockholm & Göteborg & Distans</h4>
      
      <h2 style={{color:'black',margin:'15px 0 15px 0'}}>Krav?</h2>
      <h4>Alla utbildningar har olika krav <br/> Vi samarbetar med olika komvux för att hjälpa studenter att komma in</h4>
      <div style={{width:'80%',margin:'0'}} className="separation-line"></div>
      </div>
    </div>
    </div>
    <div className="utbildningar-third">
      <div className="utbildningar-third-content"></div>
    </div>
  </>
  )
}

export default Utbildningar
{/* {Educations.map((Education) => { return (<div style={{display:'inline-block', margin:'10px'}}>{Education.name} - {Education.educationLeader} - {Education.courses} - {Education.description} </div>)})} */}