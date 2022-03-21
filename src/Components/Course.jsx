import React from 'react'
import {Button, Card } from 'react-bootstrap';


const Course = ({course}) => {
  
    return (
        <Card className="rounded"  key={course._id}>
        <Card.Body >
       <Card.Title>{course.name}</Card.Title>
       <Card.Subtitle>{course.length}</Card.Subtitle>
       <Card.Text>{course.description}</Card.Text>
   </Card.Body>
   </Card>
    )  
}

export default Course;

 
