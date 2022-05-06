// Eliaz
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import UpdateApplication from './UpdateApplication'
import ApplicationList from './ApplicationList'

function Applications() {

    axios.defaults.baseURL = "http://localhost:3001/ansoka";

    const [id, setId] = useState("");
    const [applicationInfo, setApplicationInfo] = useState([]);
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios
            .get("/allApplication")
            .then((res) => {
                console.log(res.data);
                setApplicationInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update]);

    const editHandler = (e) => {
        setId(e.target.name);
        setModal(true);
    };

    const updateHandler = (e) => {
        setUpdate(!update);
    };

    const closeHandler = () => {
        setId("");
        setModal(false);
    };

    const deleteApplication = (e) => {
        axios.delete(`http://localhost:3001/ansoka/deleteApplication/${e.target.name}`);

        setApplicationInfo((data) => {
            return data.filter((application) => application._id !== e.target.name);
        });
    };

    return (
        <div className='application-body'>
            <div className='applications'>
                <div className='application-header'>
                    <h2 className='application-header'>Dina Ansökningar:</h2>
                    <Link to="/CreateApplication">
                        <button className='add-application-btn'>
                            Ny ansökan
                        </button>
                    </Link>
                </div>
                <section className='application-container'>
                    <ul className='application-list'>
                        {applicationInfo.map((application) => (
                            <ApplicationList
                                key={application._id}
                                applicationInfos={application}
                                editHandler={editHandler}
                                deleteApplication={deleteApplication}
                            />

                        ))}
                    </ul>
                </section>
                {modal ? (
                    <section className='update-application-container'>
                        <div className='update-application-data'>
                            <p onClick={closeHandler} cursor="pointer" className="close-update-form">
                                &times;
                            </p>

                            <UpdateApplication
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

export default Applications;