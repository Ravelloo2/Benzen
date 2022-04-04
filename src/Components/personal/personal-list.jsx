import React from 'react';
import { Container } from 'react-bootstrap';
import UpdatePersonal from './update-personal';

const PersonalList = ({ personal, deletePersonal }) => {
    const { _id, fName, lName, email, bKonto } = personal;


  return (
    <div className='show-personal'>
        <Container>
            <div>{'Namn: ' + fName + ' ' + lName} </div>
            <div>{'Mailadress: ' + email}</div>
            <div>{'Bankkonto: ' + bKonto}</div>
        </Container>

        <div>
            <button className='delete-personal-btn' name={_id} onClick={deletePersonal}>Ta bort personal</button>
            <button className='update-personal-btn' name={_id} onClick={UpdatePersonal}>Uppdatera personal</button>
        </div>
    </div>

  )
}

export default PersonalList