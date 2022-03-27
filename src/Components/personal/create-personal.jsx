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








// import React, { useState } from 'react';
// import axios from "axios";

// const AddPersonal = () => {

//     axios.defaults.baseURL = "http://localhost:3001/";

//     const [submitMessage, setSubmitPersonal] = useState(false);

//     const [personal, setPersonal] = useState({
//         fName: "",
//         lName: "",
//         email: "",
//         bKonto: ""
//     });

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setPersonal(prevPersonal => {
//             return {
//                 ...prevPersonal,
//                 [name]: value
//             };
//         });
//     }

//     // const [personalfName, setfName] = useState("");
//     // const [personallName, setlName] = useState("");
//     // const [personalemail, setemail] = useState("");
//     // const [personalbKonto, setbKonto] = useState();

//     // const CreatePersonal = async () => {
//     //     await axios.post("/personal", {
//     //         fName: personalfName,
//     //         lName: personallName,
//     //         email: personalemail,
//     //         bKonto: personalbKonto,
//     //     }).then((res) => console.log(res.data))
//     // }

//     async function submitPersonal(event) {
//         event.preventDefault();
//         await axios.post("/personal", {
//             fName: personal.fName,
//             lName: personal.lName,
//             email: personal.email,
//             bKonto: personal.bKonto
//         }).then((res) => console.log(res.data))
//         setPersonal({
//             fName: "",
//             lName: "",
//             email: "",
//             bKonto: ""
//         })
//         setSubmitPersonal(true);
//     }

//     return (
//         <div>
//             <form className='add-personal-form' onSubmit={submitPersonal}>
//                 <label className='fName'>Förnamn:</label><br />
//                 <input
//                     id='fName'
//                     type="text"
//                     value={personal.fName}
//                     onChange={handleChange}
//                     className='fName'>
//                 </input><br />

//                 <label className='lName'>Efternamn:</label><br />
//                 <input
//                     id='lName'
//                     type="text"
//                     value={personal.lName}
//                     onChange={handleChange}
//                     className='lfName'
//                 />
//                 <br />

//                 <label className='email'>Mail:</label><br />
//                 <input
//                     id='email'
//                     type="text"
//                     value={personal.email}
//                     onChange={handleChange}
//                     className='email'
//                 /><br />

//                 <label className='bKonto'>Bankkonto:</label><br />
//                 <input
//                     id='bKonto'
//                     type="number"
//                     value={personal.bKonto}
//                     onChange={handleChange}
//                     className='bKonto'
//                 /><br />

//                 <input onClick={submitPersonal} type="button" value="Create Personal" id='submitBtn' />
//             </form>
//         </div>
//     )
// }

// export default AddPersonal;
