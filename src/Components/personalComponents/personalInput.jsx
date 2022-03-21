import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";

const input = () => {
    axios.defaults.baseURL = "http://localhost:3001/personal";

    const [personal, setPersonal] = useState("");
    const [addPersonal, setAddPersonal] = useState(false);


    const getPersonal = async () => {
        const response = await axios.get("/showCourses");
        setPersonal(response.data)

    }
    useEffect(() => {
        getPersonal();

    }, [])

    useEffect(() => {
        getPersonal();
        console.log(personal)
    }, [])

    const onChangeHandler = (id, key, value) => {
        setPersonal(values => {
            return values.map(personal => personal.id === id ? { ...personal, [key]: value } : personal)
        })
    }

    const updatePersonal = id => {
        const data = Personal.find(personal => personal.id === id)
        axios.patch(id, data).then(response => {
            console.log(response)
        })
    }

    const deletePersonal = id => {
        id = "/" + id;
        axios.delete(id).then(response => {
            setPersonal(values => {
                return values.filter(personal => personal.id !== id)
            })
        })
    }

    return (
        <div className="personal">
            <div className="course-header">
                <h2>Registrera ny personal</h2>
                <Button className="linkPara" variant="outline-light" size="sm">
                    <Link to="/AddCourse">Lägg till ny kurs</Link>
                </Button>
            </div>


            <div className="course-table">
                <label>Kursnamn:</label>
                <label>Längd på kurs:</label>
                <label>Beskrivning:</label>
            </div>

            <div className="availableCourses">
                {
                    courses && courses.map(course => {
                        return (
                            <div className="show-course" key={course._id}>
                                <p className="course-name">{course.name}</p>
                                <p className="course-length">{course.length}</p>
                                <p className="course-desc">{course.description}</p>

                                <Button variant="warning" size="sm" onClick={() => updateCourse(course._id)}>Uppdatera</Button>
                                <Button variant="danger" size="sm" mx="20px" onClick={() => deleteCourse(course._id)}>Ta bort</Button>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default input;