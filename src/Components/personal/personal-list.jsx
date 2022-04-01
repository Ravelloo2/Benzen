import React from 'react';
import { Button, Container } from "react-bootstrap";

const PersonalList = ({ personal, editHandler, deletePersonal }) => {
    const { _id, fName, lName, email, bKonto } = personal;

  return (
    <div className='show-personal'>
        <Container>
            <div>{'Namn: ' + fName + ' ' + lName} </div>
            <div>{'Mailadress: ' + email}</div>
            <div>{'Bankkonto: ' + bKonto}</div>
        </Container>

        <div className='personal-btns'>
            <Button name={_id} variant="outline-danger" onClick={deletePersonal}>Ta bort personal</Button>
        </div>
    </div>

  )
}

export default PersonalList