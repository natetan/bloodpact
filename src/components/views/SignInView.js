import React, { Component } from 'react';
import { Alert, Col, Container, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignInView.css';

export class SignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
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
  handleSignIn = (event) => {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.handleSignIn(user);

    // Redirect to home page
    this.props.history.push('/');
  }

  render() {
    return (
      <Container id='sign-in-container'>
        {this.props.errorMessage && <Alert color='danger'>{this.props.errorMessage}</Alert>}
        <Row id="sign-in-title">Log In</Row>
        <Form>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input onInput={this.handleInput} type='email' name='email' id='email' placeholder='email' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input onInput={this.handleInput} type='password' name='password' id='password' placeholder='password' />
          </FormGroup>
          <Row id="button-row">
            <Button id="sign-in-button" onClick={this.handleSignIn}>LOG IN</Button>
          </Row>
        </Form>
      </Container>
    );
  }
}