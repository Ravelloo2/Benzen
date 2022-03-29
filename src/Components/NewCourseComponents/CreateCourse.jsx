import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const CreateCourse = () => {
  axios.defaults.baseURL = "http://localhost:3001/courses";

  const [submitMessage, setSubmitMessage] = useState(false);

  const [courseInfo, setCourseInfo] = useState({
    name: "",
    length: "",
    description: "",
    teacher: "",
  });

  function handleChange(e) {
    setCourseInfo((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

function handleSubmit(event) {
    event.preventDefault();
  axios
      .post("/createCourse", courseInfo)
      .then((res) => {
        setCourseInfo({ name: "", length: "", description: "", teacherId: "" });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Ojdå, kursen kunde inte skapas");
        console.log(err.message);
      });
      setSubmitMessage(true);
  }

  return (
    <section className="course-container">
    <div className="course-header">  
    <h2>Lägg till ny kurs</h2>
      <Link to="/Kurser">
        <Button
          variant="outline-light"
          type="button"
          className="todo-btn todo-btn-back"
        >
          Tillbaka
        </Button>
      </Link>
      </div>
      {submitMessage ? (
        <div className="submit-message">
          <h4>Kursen har blivit tillagd.</h4>
          <p>
            <Link to="/Kurser">Tillbaka till Kursöversikt</Link>
          </p>
        </div>
      ) : (
      <section className="course-specs">
        <form onSubmit={handleSubmit} className="add-course-form" noValidate>
          <label className="courseLabel" htmlFor="name">
            Kursnamn:
          </label>
          <input
          id="kurs"
            type="text"
            name="name"
            value={courseInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="courseLabel" htmlFor="description">
            Kursbeskrivning: 
          </label>
          <textarea
          id="kurs"
          rows={3}
            type="textarea"
            name="description"
            value={courseInfo.description}
            onChange={handleChange}
            className="input"
          />
          <label className="courseLabel" htmlFor="length">
            Kursens längd i veckor: 
          </label>
          <select
          id="kurs"
            type="select"
            name="length"
            value={courseInfo.length}
            onChange={handleChange}
            className="input">
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
          <label className="courseLabel" htmlFor="teacher">
            Kursens lärare
          </label>
          <select
          id="kurs"
            type="select"
            name="teacher"
            value={courseInfo.teacher}
            onChange={handleChange}
            className="input"
          >
            <option value="teacherId1">Lärare 1</option>
            <option value="teacherId2">Lärare 2</option>
            <option value="teacherId3">Lärare 3</option>
            <option value="teacherId4">Lärare 4</option>
          </select>
          <Button variant="outline-success" type="submit" className="add-course-btn">
            Skapa Kurs
          </Button>
        </form>
      </section>
      )}
    </section>
  );
};
export default CreateCourse;
