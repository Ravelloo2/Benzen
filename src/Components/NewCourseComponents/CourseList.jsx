/* PETRAS */ 
import React, { useState } from "react";

const CourseList = ({ course, editHandler, deleteCourse }) => {
  const { _id, name, length, description, location, teacherId } = course;

  const [isOpen, setIsOpen] = useState(false);
  const [weeks, setWeeks] = useState(0);

  return (
    <div className="show-courses">
      <div>
        <div className="course-collaps" key={_id}>
          <div className="card-header">
            <h3>{name}</h3>{" "}
            <button
              className="open-course-info course-btns"
              onClick={() => setIsOpen(!isOpen)}
            >
              Info
            </button>{" "}
          </div>
          {isOpen && (
            <div className="course-details">
              <section className="course-decription">
               {description}
              </section>
              <table className="course-table">
                <tr>
                  <th className="course-th">Längd i veckor:</th>
                  <th className="course-th">Poäng:</th>
                  <th className="course-th">Startdatum:</th>
                </tr>
                <tr>
                  <td>{length}</td>
                  <td>{length}</td>
                  <td>{length}</td>
                </tr>
                <tr>
                  <th className="course-th">Plats: </th>
                  <th className="course-th">Lärare:</th>
                </tr>
                <tr>
                  <td>{location}</td>
                  <td>{teacherId}</td>
                </tr>
              </table>
              <div className="course-btn-container">
                <button
                  className="update-course-btn course-btns"
                  name={_id}
                  onClick={editHandler}
                >
                  Uppdatera
                </button>
                <button
                  className="delete-course-btn course-btns"
                  name={_id}
                  onClick={deleteCourse}
                >
                  Ta bort
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CourseList;
