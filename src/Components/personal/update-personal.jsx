import React, { useState } from 'react';
import axios from "axios";
import "../../css/Personal.css";

function UpdatePersonal({ _id, closeHandler, updateHandler }) {

    const [personalInfo, setPersonalInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        bKonto: "",
    });

    const handleChange = (e) => {
        setPersonalInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/personal/updatePersonal/${_id}`, personalInfo)
            .then((res) => {
                setPersonalInfo({
                    fName: "",
                    lName: "",
                    email: "",
                    bKonto: "",
                })
                    .catch((err) => {
                        console.error(err);
                    })
            });

    };

    return (
        <form
            className="update-form"
            onSubmit={(e) => {
                submitHandler(e);
                updateHandler();
                closeHandler();
            }}
        >

            <div className="update-personal-container">

                <h2>Uppdatera personal information:</h2>

                <label htmlFor='fName' className='label'>Förnamn:</label>
                <input
                    type="text"
                    name="fName"
                    className="input"
                    onChange={handleChange}
                />

                <label htmlFor='lName' className='label'>Efternamn:</label>
                <input
                    type="text"
                    name="lName"
                    className="input"
                    onChange={handleChange}
                />

                <label htmlFor='email' className='label'>Mailadress:</label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    onChange={handleChange}
                />

                <label htmlFor='bKonto' className='label'>Bankkonto:</label>
                <input
                    type="text"
                    name="bKonto"
                    className="input"
                    onChange={handleChange}
                />
                <button type="submit" className="updatePersonalBtn">Klar</button>


            </div>
        </form>
    )
}

export default UpdatePersonal;