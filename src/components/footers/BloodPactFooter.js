import React, { Component } from "react";
import { Container } from "reactstrap";
import "./BloodPactFooter.css";
export class BloodPactFooter extends Component {
  render() {
    return (
      <Container>
        <footer>
          <small className="d-block mb-3 text-muted">© BloodPact 2019</small>
        </footer>
      </Container>
    );
  }
}
