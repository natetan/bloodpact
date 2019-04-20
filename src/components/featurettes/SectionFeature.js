import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './SectionFeature.css';

export class LeftSectionFeature extends Component {
  render() {
    return (
      <Container>
        <Row className="featurette">
          <Col md="7" sm="6" className = "left-section">
            <h2 className="featurette-heading">{this.props.title}</h2>
            <p className="lead">{this.props.content}</p>
          </Col>
          <Col md="5" sm="6">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </Col>
        </Row>
        <hr className="featurette-divider"></hr>
      </Container>
    )
  }
}

export class RightSectionFeature extends Component {
  render() {
    return (
      <Container>
        <Row className="featurette">
          <Col md="5" sm="6">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </Col>
          <Col md="7" sm="6" className = "left-section">
            <h2 className="featurette-heading">{this.props.title}</h2>
            <p className="lead">{this.props.content}</p>
          </Col>
        </Row>
        <hr className="featurette-divider"></hr>
      </Container>
    )
  }
}