import React, { Component } from 'react';
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignUpView.css';

export class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      birthdate: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined
    }
  }

  handleInput = (event) => {
    let field = event.target.name; // which input
    let value = event.target.value; // what value 
    let changes = {};
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  handleSignup = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Container id='sign-up-container'>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Input onInput={this.handleInput} type='text' name='firstName' id='firstName' placeholder='first name' />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='lastName'>Last Name</Label>
                <Input onInput={this.handleInput} type='text' name='lastName' id='lastName' placeholder='last name' />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='birthdate'>Birthdate</Label>
            <Input onInput={this.handleInput} type='date' name='date' id='birthdate' placeholder='birthdate'
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input onInput={this.handleInput} type='email' name='email' id='email' placeholder='email' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input onInput={this.handleInput} type='password' name='password' id='password' placeholder='password' />
          </FormGroup>
          <FormGroup>
            <Label for='password-confirm'>Confirm Password</Label>
            <Input onInput={this.handleInput} type='password' name='passwordConfirmation' id='password-confirm' placeholder='Confirm password' />
          </FormGroup>
          <Button onClick={this.handleSignup}>Sign up</Button>
        </Form>
      </Container>
    );
  }
}