// CAMERON
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PersonalList from './personal-list';
import UpdatePersonal from "./update-personal";
import "../../css/Personal.css";

function GetPersonal() {

    axios.defaults.baseURL = "http://localhost:3001/personal";

    const [id, setId] = useState("");
    const [personalInfo, setPersonalInfo] = useState([]);
    const [update, setUpdate] = useState(false);
    // modal är fönstret som kommer upp på redigerings förfrågan
    const [modal, setModal] = useState(false);

    // plockar all info ifrån "personal" ifrån databasen
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

    // edit knappen i modalen som uppdaterar värdena
    const editHandler = (e) => {
        setId(e.target.name);
        setModal(true);
    };

    // det som updaterar modalen efter att värdet har lagts in, dock så loggas man ut på refresh än så länge
    const updateHandler = (e) => {
        setUpdate(!update);
    };

    // stänga knappen för modalen
    const closeHandler = () => {
        setId("");
        setModal(false);
    };

    // tar bort ett helt id ifrån databasen
    const deletePersonal = (e) => {
        axios.delete(`http://localhost:3001/personal/deletePersonal/${e.target.name}`);

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
                                personalInfos={personal}
                                editHandler={editHandler}
                                deletePersonal={deletePersonal}
                            />

                        ))}
                    </ul>
                </section>
                {modal ? (
                    <section className='update-personal-container'>
                        <div className='update-personal-data'>
                            <p onClick={closeHandler} cursor="pointer" className="close-update-form">
                                &times;
                            </p>

                            <UpdatePersonal
                                _id={id}
                                closeHandler={closeHandler}
                                updateHandler={updateHandler}

                            />
                        </div>
                    </section>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default GetPersonal;