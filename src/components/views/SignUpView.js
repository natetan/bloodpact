import React, { Component } from 'react';
import { Alert, Col, Container, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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

  // Updates the state when there is input in the fields
  handleInput = (event) => {
    let field = event.target.name; // the input
    let value = event.target.value; // its value
    let changes = {};
    changes[field] = value;
    this.setState(changes);
  }

  // Handles the sign up
  handleSignUp = (event) => {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthdate: this.state.birthdate,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    }
    this.props.handleSignUp(user);

    // Redirect to home page
    this.props.history.push('/');
  }

  render() {
    return (
      <Container id='sign-up-container'>
        {this.props.errorMessage && <Alert color='danger'>{this.props.errorMessage}</Alert>}
        <Row id="sign-up-title">Create Free Account</Row>
        <Form id="form">
          <Row form>
            <Col md={6}>
              <FormGroup>
                {/*<Label for='firstName'>First Name</Label>*/}
                <Input onInput={this.handleInput} type='text' name='firstName' id='firstName' placeholder='first name' />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                {/*<Label for='lastName'>Last Name</Label>*/}
                <Input onInput={this.handleInput} type='text' name='lastName' id='lastName' placeholder='last name' />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='birthdate'>Date of birth</Label>
            <Input onInput={this.handleInput} type='date' name='birthdate' id='birthdate' placeholder='birthdate'
            />
          </FormGroup>
          <FormGroup>
            {/*<Label for='email'>Email</Label>*/}
            <Input onInput={this.handleInput} type='email' name='email' id='email' placeholder='email' />
          </FormGroup>
          <FormGroup>
            {/*<Label for='password'>Password</Label>*/}
            <Input onInput={this.handleInput} type='password' name='password' id='password' placeholder='password' />
          </FormGroup>
          <FormGroup>
            {/*<Label for='password-confirm'>Confirm Password</Label>*/}
            <Input onInput={this.handleInput} type='password' name='passwordConfirmation' id='password-confirm' placeholder='confirm password' />
          </FormGroup>
          <Row id="button-row">
            <Button className="btn btn-danger" id="sign-up-button" onClick={this.handleSignUp}>SIGN UP</Button>
          </Row>
        </Form>
      </Container>
    );
  }
}