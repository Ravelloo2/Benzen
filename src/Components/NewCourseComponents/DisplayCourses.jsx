import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpdateCourse from "./UpdateCourse";
import CourseList from "./CourseList";

export function DisplayCourses() {
  axios.defaults.baseURL = "http://localhost:3001/courses";

  const [courseInfo, setCourseInfo] = useState([]);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("/showCourses")
      .then((res) => {
        console.log(res.data);
        setCourseInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };
  const updateHandler = () => {
    setUpdate(!update);
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  const deleteCourse = (e) => {
    axios.delete(`http://localhost:3001/courses/deleteCourse/${e.target.name}`);

    setCourseInfo((data) => {
      return data.filter((course) => course._id !== e.target.name);
    });
  };

  return (
    <section className="course-container">
    <div className="course-header">
        <h2>Våra tillgängliga kurser</h2>
      <Link to="/skapa-kurs" className="add-new-course">
        <Button variant="outline-light" size="sm" className="add-btn">Lägg till ny kurs</Button>
      </Link>
      </div>
      <section className="course-info">
        
        <ul className="course-list">
          {courseInfo.map((course) => (
            <CourseList
              key={course._id}
              course={course}
              editHandler={editHandler}
              deleteCourse={deleteCourse}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          
            <p onClick={closeHandler} className="close">
              &times;
            </p>

            <UpdateCourse
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
        
        </section>
      ) : (
        ""
      )}
    </section>
  );
}

export default DisplayCourses;
