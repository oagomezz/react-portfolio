import React, { useState }from "react"
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import axios from "axios"

const ContactMe = () =>{
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
  }
  const formID = 'XVmGxkXU'
  const formSparkUrl = `https://submit-form.com/${formID}`

  const initialFormState = {
    email: '',
    name: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialFormState)
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
  const submitForm = async(event) => {
    event.preventDefault();
    await postSubmission();
  }
  const postSubmission = async () => {
    const payload = {
      ...formState
    }
    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
    } catch(errors){
      console.log(errors)
    }}


    return(
      <div className="content">
    <Form action='formSparkUrl' onSubmit={submitForm} className="contact-me">
        <Col md={6}>
          <FormGroup>
            <Label for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Example Name"
              type="name"
              value={formState.name}
              onChange={handleChange}
              className="name-input"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="email-input"
            />
          </FormGroup>
        </Col>
        
      <FormGroup>
        <Label for="message">
          Message
        </Label>
            <Input
              id="message"
              name="message"
              placeholder="Insert message here"
              value={formState.message}
              onChange={handleChange}
              className="message-input"
              type="textarea"
            />
          </FormGroup>
        <Row>
      </Row>
    <Button className="contact-button" type="submit" disabled={disabled} onClick={onClick}>
      Contact Me
    </Button>
  </Form>  
  </div>  
    )}
    
    export default ContactMe