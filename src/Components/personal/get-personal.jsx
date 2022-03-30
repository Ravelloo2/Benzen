import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button } from "react-bootstrap";
import PersonalList from './personal-list';

export function GetPersonal() {

    axios.defaults.baseURL = "http://localhost:3001/personal";

    const [personalInfo, setPersonalInfo] = useState([]);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios
            .get("/allPersonal")
            .then((res) => {
                console.log(res.data);
                setPersonalInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update]);


    const deletePersonal = (e) => {
        axios.delete(`http://localhost:3001/personal/${e.target.name}`);

        setPersonalInfo((data) => {
            return data.filter((personal) => personal._id !== e.target.name);
        });
    };



    return (
        <div className='personals'>
            <div className='personal-header'>
                <h2>Anställda lärare:</h2>
                <Button variant='outline-light' size='sm'>
                    <Link to="/AddPersonal">Lägg till nya anställningar</Link>
                </Button>
            </div>
            <section className='peronal-container'>
                <ul className='personal-list'>
                    {personalInfo.map((personal) => (
                        <PersonalList
                            key={personal._id}
                            personal={personal}
                            deletePersonal={deletePersonal}
                        />

                    ))}
                </ul>
            </section>
        </div>
    )
}

export default GetPersonal;