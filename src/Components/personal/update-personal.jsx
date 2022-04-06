// CAMERON
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../css/Personal.css";

function UpdatePersonal({ _id, closeHandler, updateHandler }) {
    axios.defaults.baseURL = "http://localhost:3001/personal/";

    const [courseName, setcourseName] = useState([]);
    const [personalAPI, setPersonalAPI] = useState([]);

    // den här dängan tar all information ifrån samma specifika ID som man klickar på och slänger in värdena in i lådorna när edit modalen kommer upp
    useEffect(() => {
        axios.get(`/showOnePersonal/${_id}`)
            .then((res) => {
                console.log(res.data);
                setPersonalAPI(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [personalInfo, setPersonalInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        bKonto: "",
        courseName: [],
    });

    const handleChange = (e) => {
        setPersonalInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
        setPersonalAPI(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault(personalInfo);
        console.log(personalInfo);

        axios.patch(`/updatePersonal/${_id}`, personalInfo)
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

    // den här plockar namnet på kursen finns i petras kurser
    useEffect(async () => {
        const res = await axios.get("http://localhost:3001/courses/showCourses");
        setcourseName(res.data);
    }, []);

    useEffect(async () => {
        console.log(courseName);
    }, [courseName]);

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
                    value={personalAPI.fName}    
                >
                </input>

                <label htmlFor='lName' className='label'>Nytt efternamn:</label>
                <input
                    type="text"
                    name="lName"
                    className="input"
                    onChange={handleChange}
                    value={personalAPI.lName}  
                />

                <label htmlFor='email' className='label'>Ny mailadress:</label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    onChange={handleChange}
                    value={personalAPI.email}  
                />

                <label htmlFor='bKonto' className='label'>Nytt bankkonto:</label>
                <input
                    type="text"
                    name="bKonto"
                    className="input"
                    onChange={handleChange}
                    value={personalAPI.bKonto}  
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