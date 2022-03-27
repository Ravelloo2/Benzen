import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function UpdateCourse({ _id, closeHandler, updateHandler }) {
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    length: "",
    description: "",
    teacherId: "",
  });

  const handleChange = (e) => {
    setCourseInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(courseInfo)
    axios
      .patch(`http://localhost:3001/courses/updateCourse/${_id}`, courseInfo)
      .then((res) => {
        setCourseInfo({
          name: "",
          length: "",
          description: "",
          teacherId: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section className="update-course-info">
    <form
      className="update-form"
      onSubmit={(e) => {
        submitHandler(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="name" className="label">
        Nytt kursnamn:
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="length" className="label">
        Ny längd på kurs:
      </label>
      <select type="" name="length" className="input" onChange={handleChange}>
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
      <label htmlFor="description" className="label">
        Ny kursbeskrivning:
      </label>
      <textarea
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="teacher" className="label">
        Ny lärare:
      </label>
      <select
        type="textarea"
        name="teacher"
        className="input"
        onChange={handleChange}
      >
        <option value="teacherId1">Lärare 1</option>
        <option value="teacherId2">Lärare 2</option>
        <option value="teacherId3">Lärare 3</option>
        <option value="teacherId4">Lärare 4</option>
      </select>
      <Button variant="outline-warning" type="submit" className="update-btn">
        Updatera Kurs
      </Button>
    </form>
    </section>
  );
}

export default UpdateCourse;
