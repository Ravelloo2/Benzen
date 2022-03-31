import React, {useState} from "react";


const CourseList = ({ course, editHandler, deleteCourse }) => {
  const { _id, name, length, description, location, teacherId } = course;

  const [isOpen, setIsOpen] = useState(false);
  const [weeks, setWeeks] = useState(0);

  return (
    <div className="show-courses">
    
    
        <div>
        <div className="course-collaps" key={_id}>
        <div className="card-header"><h3>{name}</h3> <button className="open-course-info" onClick={()=> setIsOpen(!isOpen)}>Info</button> </div>
        {isOpen && (
          <div className="course-details">
            <section className="course-decription">Beskrivning: {description}</section>
            <table>
            <p className="course-length">Längd i veckor: {length}</p>
            <p className="course-points">Poäng:  {length}</p>
            <p className="course-start">Startdatum: {length}</p>
            <p className="course-location">Plats: {location}</p> 
            <p className="course-teacher">Lärare: {teacherId}</p>
            </table>
            <div className="course-btns">
              <button className="update-course-btn" name={_id} onClick={editHandler}>
                Uppdatera
              </button>
              <button className="delete-course-btn" name={_id} onClick={deleteCourse}>
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
