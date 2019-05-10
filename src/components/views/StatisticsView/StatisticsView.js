import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {
  Container, Card, CardText, CardBody, CardTitle, Row, Col
} from 'reactstrap';
import PintBloodLogo from "../../../img/dashboard/Pint.png";
import HeartDonationLogo from "../../../img/dashboard/Heart-Donation.png";
import { MainViz } from "../../data_visuals/main-viz.js";
import { GoalViz } from "../../data_visuals/goal-viz.js";
import './StatisticsView.css'

export class StatisticsView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-viz">
          <MainViz />
        </div>
        <div className="card-viz">
          <Container>
            <Row>
              <Col md='4'>
                <Card className="card">
                  <CardTitle className="card-title">Your Donations</CardTitle>
                  <img className="large-icon" width="60%" src={PintBloodLogo} alt="pint of blood icon" />
                  <CardBody>
                    <CardText className="card-stat">3 pints</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className="card">
                  <CardTitle className="card-title">Your Contribution</CardTitle>
                  <img className="large-icon" width="60%" src={HeartDonationLogo} alt="heart logo" />
                  <CardBody>
                    <CardText className="card-stat">9 lives saved</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className="card">
                  <CardTitle className="card-title">Your Goal</CardTitle>
                  <GoalViz />
                  <CardBody>
                    <CardText className="card-stat">20 pints</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}