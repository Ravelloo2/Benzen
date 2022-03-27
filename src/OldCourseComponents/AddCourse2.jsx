import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

function AddCourse2(props) {
  axios.defaults.baseURL = "http://localhost:3001";

  const [submitMessage, setSubmitMessage] = useState(false);

  const [course, setCourse] = useState({
    name: "",
    length: "",
    description: "",
    teacherId: "",
  });
  
  function handleChange(e) {
    setCourse((data) => 
    ({...data, [e.target.name] : e.target.value}));
}

  function submitCourse(e) {
    e.preventDefault();
    axios
      .post("/courses", course)
      .then((res) => {
        setCourse({ name: "", length: "", description: "", teacher: "" });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("could not create course");
        console.log(err.message);
      });
    setSubmitMessage(true);
  }

  return (
    <div className="courses">
      <div className="course-header">
        <h2>Lägg till ny kurs</h2>
        <Button variant="outline-light" size="sm">
          <Link to="/Courses"> Tillbaka</Link>
        </Button>
      </div>
      {submitMessage ? (
        <div className="submit-message">
          <h4>Kursen har blivit tillagd.</h4>
          <p>
            <Link to="/courses">Tillbaka till Kursöversikt</Link>
          </p>
        </div>
      ) : (
        <form className="add-course-form" onSubmit={submitCourse}>
          <label className="courseLabel">Kursnamn:</label>
          <input
            id="kurs"
            name="name"
            type="text"
            className="courseName"
            value={course.name}
            onChange={handleChange}
          ></input>
          <br />

          <label className="courseLabel">Längd:</label>
          <select
            id="kurs"
            name="length"
            type="number"
            className="courseLength"
            value={course.length}
            onChange={handleChange}
          >
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
          </select>
          <br />

          <label className="courseLabel">Beskrivning:</label>
          <textarea
            id="kurs"
            name="description"
            type="text"
            className="courseDescription"
            rows={3}
            value={course.description}
            onChange={handleChange}
          ></textarea>
          <br />

          <label className="courseLabel">Lärare:</label>
          <select
            id="kurs"
            name="teacherID"
            type="text"
            className="courseTeacher"
            value={course.teacherId}
            onChange={handleChange}
          >
            <option value="teacherId1">Lärare 1</option>
            <option value="teacherId2">Lärare 2</option>
            <option value="teacherId3">Lärare 3</option>
            <option value="teacherId4">Lärare 4</option>
          </select>
          <br />
          <Button variant="success" type="submit" className="add-course-btn">
            Lägg till
          </Button>
        </form>
      )}
    </div>
  );
}

export default AddCourse2;
