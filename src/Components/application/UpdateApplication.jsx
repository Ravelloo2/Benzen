// Eliaz 
import React, { useState, useEffect } from 'react';
import axios from "axios";

function UpdateApplication({ _id, closeHandler }) {

    axios.defaults.baseURL = "http://localhost:3001/ansoka/";
    const [Educations, setEducations] = useState([]);
    const [applicationInfo, setApplicationInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        utbildning: "",
    });

    useEffect(async () => {
        let res = await axios.get(`/showOneApplication/${_id}`)
        console.log(res.data)
        setApplicationInfo({
            fName: res.data.Fname,
            lName: res.data.Lname,
            email: res.data.Email,
            utbildning: res.data.Utbildningar,
        })
        // axios.get(/showOneApplication/${_id})
        //     .then((res) => {
        //         console.log(res.data);
        //         setApplicationInfo({
        //             fName: res.data.Fname,
        //             lName: res.data.Lname,
        //             email: res.data.Email,
        //             utbildning: res.data.Utbildningar,
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);
    useEffect(async () => {
        const res = await axios.get("/AllEducation");
        setEducations(res.data);
    }, []);

    const onAnyChange = (e) => {
        setApplicationInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        console.log("this", applicationInfo)
        e.preventDefault();
        axios
            .patch(`/updateApplication/${_id}`, applicationInfo)
            .then((res) => {
                setApplicationInfo({
                    fName: "",
                    lName: "",
                    email: "",
                    utbildning: "",

                });
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };






    return (
        <form
            className="update-form"
            onSubmit={(e) => {
                handleSubmit(e);
                closeHandler();
            }}
        >

            <div className="update-application-container">
                <h2>Redigera ansökan</h2>

                <label htmlFor='fName' className='label'>Nytt förnamn:</label>
                <input
                    type="text"
                    name="fName"
                    className="input"
                    onChange={onAnyChange}
                    value={applicationInfo.fName}
                >
                </input>

                <label htmlFor='lName' className='label'>Nytt efternamn:</label>
                <input
                    type="text"
                    name="lName"
                    className="input"
                    onChange={onAnyChange}
                    value={applicationInfo.lName}
                />

                <label htmlFor='email' className='label'>Ny mailadress:</label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    onChange={onAnyChange}
                    value={applicationInfo.email}
                />
                <select
                    name="utbildning"
                    type="select"
                    onChange={onAnyChange}
                    value={applicationInfo.utbildning}
                >
                    <option value='' disabled>Välj Utbildning:</option>
                    {Educations.map(x => { return (<option key={x._id}>{x.name}</option>) })} </select>
                <button type="submit" className="updatePersonalBtn">Klar</button>
            </div>
        </form>
    )
}

export default UpdateApplication;