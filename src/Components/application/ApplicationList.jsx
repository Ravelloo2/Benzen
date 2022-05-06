// Eliaz
import React, { useState } from 'react';
import '../../css/apply.css'

const ApplicationList = ({ applicationInfos, editHandler, deleteApplication }) => {
  const { _id, Fname, Lname, Email, Utbildningar } = applicationInfos;

  return (
    <li key={_id}>
      <div className='show-application'>
          <h5>{ Fname + ' ' + Lname} </h5>
          <div>{'Mailadress: ' + Email}</div>
          <div>{'Vald utbildning: ' + Utbildningar}</div>
        <div>
          <button className='delete-application-btn' name={_id} onClick={deleteApplication}>Ta bort ansökan</button>
          <button className='update-application-btn' name={_id} onClick={editHandler}>Updatera information</button>
        </div>
      </div>
    </li>
  )
};

export default ApplicationList;