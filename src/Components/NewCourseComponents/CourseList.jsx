import React from "react";
import { Button, Container, Card } from "react-bootstrap";

const CourseList = ({ course, editHandler, deleteCourse }) => {
  const { _id, name, length, description, teacherId } = course;

  return (
      <div className="show-courses">
          <Container>
    <Card border="dark" className="my-1 p-3">
    <div key={_id}>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Längd (i veckor): {length}</Card.Subtitle>
     
        <Card.Text>{description}</Card.Text>
       
        <Card.Text>{teacherId}</Card.Text>
      </div>
   
      <div className="course-buttons">
        <Button variant="outline-warning" name={_id} onClick={editHandler}>
          Uppdatera
        </Button>
        <Button variant="outline-danger" name={_id} onClick={deleteCourse}>
          Ta bort
        </Button>
    </div>
    </Card>
    </Container>
      </div>
  );
};
export default CourseList;
