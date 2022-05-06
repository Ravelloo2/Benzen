// Eliaz 
import React, { useState, useEffect } from 'react';
import axios from "axios";

function UpdateApplication({ _id, closeHandler}) {

    axios.defaults.baseURL = "http://localhost:3001/ansoka/";

    const [Educations, setEducations] = useState([]);

    
    const [ApplicationAPI, setApplicationAPI] = useState([]);

    useEffect(() => {
        axios.get(`/showOneApplication/${_id}`)
            .then((res) => {
                console.log(res.data);
                setApplicationAPI(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [applicationInfo, setApplicationInfo] = useState({
        fName: ApplicationAPI.fName,
        lName: ApplicationAPI.lName,
        email: ApplicationAPI.email,
        utbildning: ApplicationAPI.utbildning,
    });


    const handleSubmit = (e) => {
      console.log(applicationInfo)
      e.preventDefault();
      axios
        .patch(`/updateApplication/${_id}`, applicationInfo)
        .then((res) => {
          setApplicationInfo({
            name: "",
            educationLeader: "",
            length: "",
            place: "",
            points: "",
            courses: [],
            description: "",
            
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const onAnyChange = (e) => {
      setApplicationInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    useEffect(async () => {
      const res = await axios.get("/AllEducation");
      setEducations(res.data);
    }, []);

    console.log('!!!!' , applicationInfo)

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
                    value={ApplicationAPI.fName}
                >
                </input>

                <label htmlFor='lName' className='label'>Nytt efternamn:</label>
                <input
                    type="text"
                    name="lName"
                    className="input"
                    onChange={onAnyChange}
                    value={ApplicationAPI.lName}
                />

                <label htmlFor='email' className='label'>Ny mailadress:</label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    onChange={onAnyChange}
                    value={ApplicationAPI.email}
                />
                <select
                    name="utbildning"
                    type="select"
                    onChange={onAnyChange}
                >
                    <option value='' disabled>Välj Utbildning:</option>
                    {Educations.map( x => {return (<option key={x._id}>{x.name}</option> )})} </select>
                <button type="submit" className="updatePersonalBtn">Klar</button>
            </div>
        </form>
    )
}

export default UpdateApplication;