// CAMERONS
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const PersonalList = ({ personalInfos, editHandler, deletePersonal }) => {
  const { _id, fName, lName, email, bKonto, courseName } = personalInfos;

  return (
    <li key={_id}>
      <div className='show-personal'>
        <Container>
          <h5>{ fName + ' ' + lName} </h5>
          <div>{'Mailadress: ' + email}</div>
          <div>{'Bankkonto: ' + bKonto}</div>
          <div>{'Kursnamn: ' + courseName}</div>
        </Container>
        <div>
          <button className='delete-personal-btn' name={_id} onClick={deletePersonal}>Ta bort personal</button>
          <button className='update-personal-btn' name={_id} onClick={editHandler}>Updatera information</button>
        </div>
      </div>
    </li>
  )
};

export default PersonalList;