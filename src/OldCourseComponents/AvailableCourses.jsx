import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";


const AvailableCourses = () => {
  axios.defaults.baseURL = "http://localhost:3001/courses";

  const [courses, setCourses] = useState([]);
  const [update, setUpdate] = useState(false);

  const getCourses = async () => {
    const response = await axios.get("/showCourses");
    setCourses(response.data);
  };
  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    getCourses();
    console.log(courses);
  }, []);

 

  const deleteCourse = (id) => {
    id = "/" + id;
    axios.delete(id).then((response) => {
      setCourses((values) => {
        return values.filter((course) => course.id !== id);
      });
      window.location.reload(false);
    });
  };

  const handleInputChange = (id, key, value) => {
    setCourses((courses) => {
      return courses.map((course) =>
        course.id === id ? { ...course, [key]: value } : course
      );
    });
  };

  const updateCourse = async (e, id) => {
    const data = courses.find((course) => course.id === id);
    if (data) {
      id = "/" + id;
      const updatedCourse = await axios.patch(id, data);
      setCourses(courses.map(course => (course._id === id ? updatedCourse : course)))
      }
    
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>Våra tillgängliga kurser</h2>

        <Button variant="outline-light" size="sm">
          <Link to="/AddCourse2">Lägg till ny kurs</Link>
        </Button>
      </div>

      {courses &&
        courses.map((course) => {
          return (
            <div className="show-courses">
              <Container>
                <Card border="dark" className="my-1 p-3">
                  <div key={course._id}>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Subtitle>
                      Längd (veckor): {course.length}{" "}
                    </Card.Subtitle>
                    <Card.Text>{course.description}</Card.Text>
                    <Card.Text>{course.teacherId}</Card.Text>
                  
                  <br />
                  <div className="course-buttons">
                    
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={e => updateCourse(e)}
                      >
                        Uppdatera
                      </Button>
                    
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteCourse(course._id)}
                    >
                      Ta bort
                    </Button>
                    </div>
                  </div>
                </Card>
              </Container>
            </div>
          );
        })}
    </div>
  );
};
export default AvailableCourses;
