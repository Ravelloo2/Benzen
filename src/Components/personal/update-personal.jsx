// CAMERON
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../css/Personal.css";

function UpdatePersonal({ _id, closeHandler, updateHandler }) {
    axios.defaults.baseURL = "http://localhost:3001/personal/";

    const [courseName, setcourseName] = useState([]);
    const [personalAPI, setPersonalAPI] = useState([]);

    useEffect(() => {
        axios.get(`/showOnePersonal/${_id}`)
            .then((res) => {
                console.log(res.data);
                setPersonalAPI(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [personalAPI]);

    const [personalInfo, setPersonalInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        bKonto: "",
        courseName: [],
    });

    const handleChange = (e) => {
        setPersonalInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault(personalInfo);
        console.log(personalInfo);

        axios.patch(`/personal/updatePersonal/${_id}`, personalInfo)
            .then((res) => {
                setPersonalInfo({
                    fName: "",
                    lName: "",
                    email: "",
                    bKonto: "",
                    courseName: [],
                })
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })

    };

    useEffect(async () => {
        const res = await axios.get("http://localhost:3001/courses/showCourses");
        setcourseName(res.data);
    }, []);

    useEffect(async () => {
        console.log(courseName);
    }, [courseName]);

    // useEffect(async () => {
    //     const res = await axios.get("/personal/allPersonal");
    //     setfName(res.data);
    // }, []);



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
                <h2>Redigera personal information:</h2>

                <label htmlFor='fName' className='label'>Nytt förnamn:</label>
                <input
                    type="text"
                    name="fName"
                    className="input"
                    onChange={handleChange}
                    value={personalAPI.map((personalAPI) => {
                        return (<div key={personalAPI._id}>{personalAPI.fName}</div>
                        )
                    })}
                >
                </input>

                <label htmlFor='lName' className='label'>Nytt efternamn:</label>
                <input
                    type="text"
                    name="lName"
                    className="input"
                    onChange={handleChange}
                />

                <label htmlFor='email' className='label'>Ny mailadress:</label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    onChange={handleChange}
                />

                <label htmlFor='bKonto' className='label'>Nytt bankkonto:</label>
                <input
                    type="text"
                    name="bKonto"
                    className="input"
                    onChange={handleChange}
                />
                <select
                    name="courseName"
                    type="select"
                    onChange={handleChange}
                >
                    <option value="" selected disabled>Välj Kurs:</option>
                    {courseName.map((courseName) => {
                        return (<option key={courseName._id}>{courseName.name}</option>
                        )
                    })}
                </select>
                <button type="submit" className="updatePersonalBtn">Klar</button>
            </div>
        </form>
    )
}

export default UpdatePersonal;