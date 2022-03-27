import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Card, Container } from "react-bootstrap";

const GetPersonal = () => {

    axios.defaults.baseURL = "http://localhost:3001/personal";

    const [personals, setPersonal] = useState("");

    const getPersonal = async () => {
        const response = await axios.get("/showPersonal");
        setPersonal(response.data)
    };
    useEffect(() => {
        getPersonal();
    }, []);

    useEffect(() => {
        getPersonal();
        console.log(personals);
    }, [])

    const handleChange = (id, key, value) => {
        setPersonal(personals => {
            return personals.map(personal => personal.id === id ? { ...personal, [key]: value } : personal)
        })
    }

    const updatePersonal = (id) => {
        const data = personals.find(personal => personal.id === id)
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
            window.location.reload(false);
        })
    }

    return (
        <div className='personals'>
            <div className='personal-header'>
                <h2>Anställda lärare:</h2>
                <Button variant='outline-light' size='sm'>
                    <Link to="/AddPersonal">Lägg till nya anställningar</Link>
                </Button>
            </div>

            {
                personals && personals.map(personal => {
                    return (
                        <div className='show-personal'>
                            <Container>
                                <Card border='dark' className='my-1 p-3'>
                                    <div key={personal._id}>
                                        <Card.Title>{personal.fName + personal.lName}</Card.Title>
                                        <Card.Subtitle>{personal.email}</Card.Subtitle>
                                        <Card.Text>{personal.bKonto}</Card.Text>
                                    </div> <br />
                                    <div className='personal-buttons'>
                                        <Link to="/UpdatePersonal">
                                            <Button variant="outline-primary" size='sm' onClick={() => updatePersonal(personal._id)}>Uppdatera personalinformation</Button>
                                        </Link>
                                        <Button variant='outline-danger' size='sm' onClick={() => deletePersonal(personal._id)}>Ta bort personal</Button>
                                    </div>
                                </Card>
                            </Container>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GetPersonal;