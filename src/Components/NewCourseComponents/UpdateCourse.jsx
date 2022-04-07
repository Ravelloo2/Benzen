/*PETRAS*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  FaTimes } from 'react-icons/fa';

function UpdateCourse({ _id, closeHandler, updateHandler }) {
  axios.defaults.baseURL = "http://localhost:3001";
  const [teacher, setTeacher] = useState([]);

  const [courseInfo, setCourseInfo] = useState({
    name: "",
    length: "",
    startDate: "",
    description: "",
    location: "",
    teacherId: "",
  });

  const handleChange = (e) => {
    setCourseInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  useEffect(async () => {
    const res = await axios.get("/personal/allPersonal");
    setTeacher(res.data);
  }, []);

  useEffect(async () => {
    console.log(teacher);
  }, [teacher]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(courseInfo);
    axios
      .patch(`/courses/updateCourse/${_id}`, courseInfo)
      .then((res) => {
        setCourseInfo({
          name: "",
          length: "",
          startDate: "",
          description: "",
          location: "",
          teacherId: "",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="update-wrapper">
     
      <form
        className="update-course-form"
        onSubmit={(e) => {
          submitHandler(e);
          updateHandler();
          closeHandler();
        }}
      >
       <button onClick={closeHandler} id="close" aria-label="Close">
      <FaTimes/>
      </button>
      <br/>
        <label htmlFor="name" className="course-label">
          Nytt kursnamn:
        </label>
        <input
          type="text"
          name="name"
          className="course-input"
          onChange={handleChange}
          placeholder={courseInfo.name}
        />
        <label htmlFor="description" className="course-label">
          Ny kursbeskrivning:
        </label>
        <textarea
          type="textarea"
          name="description"
          className="course-input"
          onChange={handleChange}
        />

        <label htmlFor="length" className="course-label">
          Ny längd på kurs:
        </label>
        <select type="" name="length" className="course-input" onChange={handleChange}>
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

        <label htmlFor="location" className="course-label">
          Plats:
        </label>
        <select
          id="kurs"
          type="select"
          name="location"
          value={courseInfo.location}
          onChange={handleChange}
          className="course-input"
        >
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Distans</option>
        </select>

        <label htmlFor="teacher" className="course-label">
          Ny lärare:
        </label>
        <select
          id="kurs"
          type="select"
          name="teacherId"
          className="course-input"
          value={courseInfo.teacherId}
          onChange={handleChange}
        >
          {teacher.map((teachers) => {
            return <option key={teacher._id}>{teachers.fName}</option>;
          })}
        </select>
        <button type="submit" className="update-course-btn course-btns ">
          Updatera Kurs
        </button>
      </form>
    </section>
  );
}

export default UpdateCourse;
