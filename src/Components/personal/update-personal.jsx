import React, { useState } from "react";
import axios from "axios";

function UpdatePersonal({ _id, closeHandler, updateHandler }) {
    const [personalInfo, setPersonalInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        bKonto: "",
    });

    const handleChange = (e) => {
        setPersonalInfo((data) => ({ ...data, [e.target.fName]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(personalInfo)
        axios.patch(`http://localhost:3001/personal/${_id}`, personalInfo)
            .then((res) => {
                setPersonalInfo({
                    fName: "",
                    lName: "",
                    email: "",
                    bKonto: "",
                });
            });
            
    };
    return (
        <form className="update-form"
        onSubmit={(e) => {
          submitHandler(e);
          updateHandler();
          closeHandler();
          }} 

          >

        <div className="update-personal-container">
            <form
            type="text"
            name="fName"
            className="input"
            onChange={handleChange}
            />
            <form
            type="text"
            name="lName"
            className="input"
            onChange={handleChange}
            />
            <form
            type="text"
            name="email"
            className="input"
            onChange={handleChange}
            />
            <form
            type="text"
            name="bKonto"
            className="input"
            onChange={handleChange}
            />
            
            
            
        </div>
        </form>
    )
}

export default UpdatePersonal