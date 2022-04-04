import React from 'react';
import { Container } from 'react-bootstrap';

const PersonalList = ({ personalInfos, editHandler, deleteHandler }) => {
  const { _id, fName, lName, email, bKonto } = personalInfos;


  return (
    <li key={_id}>
      <div className='show-personal'>
        <Container>
          <div>{'Namn: ' + fName + ' ' + lName} </div>
          <div>{'Mailadress: ' + email}</div>
          <div>{'Bankkonto: ' + bKonto}</div>
        </Container>
        <div>
          <button className='delete-personal-btn' name={_id} onClick={deleteHandler}>Ta bort personal</button>
          <button className='update-personal-btn' name={_id} onClick={editHandler}>Updatera information</button>
        </div>
      </div>
    </li>
  )
};

export default PersonalList;