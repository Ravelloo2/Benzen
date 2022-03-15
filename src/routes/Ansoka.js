import React from 'react'
import { Button, FormLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'

function Ansoka() {
  return (
  <div>

    <div className='Ansoka-form'>
      <Form>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" >
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" >
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <FormLabel htmlFor='inlineFormInputGroup'> 
        Email
      </FormLabel>
      <InputGroup className='mb-2'>
        <InputGroup.Text>Email</InputGroup.Text>
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
  <Row>
    <Col s="auto">
      <FormLabel htmlFor='inlineFormInputGroup'>Förnamn</FormLabel>
    </Col>
  </Row>
</Form>
    </div>

  </div>
  )
}

export default Ansoka
