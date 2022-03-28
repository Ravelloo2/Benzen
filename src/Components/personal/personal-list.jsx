import React from 'react';
import { Button, Container } from "react-bootstrap";

const PersonalList = ({ personal, editHandler, deletePersonal }) => {
    const { _id, fName, lName, email, bKonto } = personal;

  return (
    <div className='show-personal'>
        <Container>
            <div>{fName}</div>
            <div>{lName}</div>
            <div>{email}</div>
            <div>{bKonto}</div>
        </Container>

        <div className='personal-btns'>
            <Button name={_id} onClick={editHandler}>Updatera personal</Button>
            <Button name={_id} onClick={deletePersonal}>Ta bort personal</Button>
        </div>
    </div>

  )
}

export default PersonalList