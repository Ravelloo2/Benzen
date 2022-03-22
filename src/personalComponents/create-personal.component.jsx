import React, { useState } from 'react';
import axios from "axios";

const AddPersonal = () => {

    axios.defaults.baseURL = "http://localhost:3001/";

    const [personalfName, setfName] = useState("");
    const [personallName, setlName] = useState("");
    const [personalemail, setemail] = useState("");
    const [personalbKonto, setbKonto] = useState();

    const CreatePersonal = async () => {
        await axios.post("/personal", {
            fName: personalfName,
            lName: personallName,
            email: personalemail,
            bKonto: personalbKonto,
        }).then((res) => console.log(res.data))
    }



    return (
        <div>
            <label className='fName'>Förnamn:</label><br />
            <input 
            id='fName'
            type="text" 
            value={personalfName} 
            onChange={(e) => setfName(e.target.value)} 
            className='fName'>
            </input><br />

            <label className='lName'>Efternamn:</label><br />
            <input 
            id='lName'
            type="text" 
            value={personallName}
            onChange={(e) => setlName(e.target.value)} 
            className='lfName' 
            />
            <br />

            <label className='email'>Mail:</label><br />
            <input 
            id='email'
            type="text" 
            value={personalemail}
            onChange={(e) => setemail(e.target.value)} 
            className='email' 
            /><br />

            <label className='bKonto'>Bankkonto:</label><br />
            <input 
            id='bKonto'
            type="number" 
            value={personalbKonto}
            onChange={(e) => setbKonto(e.target.value)} 
            className='bKonto' 
            /><br />

            <input onClick={() => CreatePersonal()} type="button" value="Create Personal" id='submitBtn' />
        </div>
    )
}

export default AddPersonal;
