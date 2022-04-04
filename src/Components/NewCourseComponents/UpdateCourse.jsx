/*PETRAS*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function UpdateCourse({ _id, closeHandler, updateHandler }) {
  const [teacher, setTeacher] = useState([]);
  
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    length: "",
    startDate: "",
    description: "",
    location:"",
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
          startDate: "",
          description: "",
          location:"",
          teacherId: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(async () => {
    const res = await axios.get("/personal/allPersonal");
    setTeacher(res.data);
  }, []);

  useEffect(async () => {
    console.log(teacher);
  }, [teacher]);


  return (
    <section className="update-course">
     <button onClick={closeHandler} className="close" aria-label="Close">
             x
            </button>
    <form
      className="update-form"
      onSubmit={(e) => {
        submitHandler(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="name" className="course-label">
        Nytt kursnamn:
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="course-label">
        Ny kursbeskrivning:
      </label>
      <textarea
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />

      <label htmlFor="length" className="course-label">
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
      
      <label htmlFor="location" className="course-label">
              Plats:
            </label>
            <select
              id="kurs"
              type="select"
              name="location"
              value={courseInfo.location}
              onChange={handleChange}
              className="input"
            >
              <option>Distans</option>
              <option>Kista</option>
            </select>

      <label htmlFor="teacherId" className="course-label">
        Ny lärare:
      </label>
      <select
        type="textarea"
        name="teacherId"
        className="input"
        onChange={handleChange}
      >
                    {teacher.map(teachers => {
                return (<option key={teacher._id}>{teachers.email}</option>
              )})}
              </select>
      <Button variant="outline-warning" type="submit" className="update-btn">
        Updatera Kurs
      </Button>
    </form>
    </section>
  );
}

export default UpdateCourse;
