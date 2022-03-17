import React from 'react'
import { Link } from "react-router-dom"

function AddCourse() {
  return (
    <div className="courses">
    <div className="course-header">
    <h2>Lägg till ny kurs</h2>
    <button className="linkPara"><Link to="/Courses">Tillbaka till Kurser</Link></button>
    </div>
    <form className="add-course-form">
        <label className='courseLabel'>Kursnamn:</label><br/>
            <input id='kurs' type="text" className='courseName'></input><br/>
        <label className='courseLabel'>Längd på kurs, antal veckor:</label><br/>
            <select id="kurs" name="courseLength">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
            </select><br/>

        <label className='courseLabel'>Beskrivning:</label><br/>
            <textarea id='kurs' type="text" className='courseDesc' rows={4}></textarea><br/>
        <label className='courseLabel'>Lärare:</label><br/>
            <select id='kurs' type="text" className='courseTeacher'>
                <option value="teacherId1">Lärare 1</option>
                <option value="teacherId2">Lärare 2</option>
                <option value="teacherId3">Lärare 3</option>
            </select><br/>
            <button className="add-course-btn" type="submit">Lägg till</button>
    </form>
   
    </div>
  )
}

export default AddCourse