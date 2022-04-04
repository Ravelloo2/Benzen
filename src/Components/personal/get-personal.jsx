import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PersonalList from './personal-list';
import "../../css/Personal.css";

export function GetPersonal() {

    axios.defaults.baseURL = "http://localhost:3001/personal";

    const [personalInfo, setPersonalInfo] = useState([]);

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
    }, []);


    const deletePersonal = (e) => {
        axios.delete(`http://localhost:3001/personal/${e.target.name}`);

        setPersonalInfo((data) => {
            return data.filter((personal) => personal._id !== e.target.name);
        });
    };



    return (
        <div className='personal-body'>
        <div className='personals'>
            <div className='personal-header'>
                <h2>Anställda lärare:</h2>
                    <Link to="/AddPersonal">
                    <button className='add-personal-btn'>
                    Lägg till nya anställningar
                    </button>
                    </Link>
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
        </div>
    )
}

export default GetPersonal;