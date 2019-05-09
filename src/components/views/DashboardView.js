import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import {
  Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink
} from 'reactstrap';
import './DashboardView.css';
//import { VerticalNav } from '../navs/VerticalNav';
import PintBloodLogo from "../../img/dashboard/Pint.png";
import HeartDonationLogo from "../../img/dashboard/Heart-Donation.png";
import PieChartLogo from "../../img/left-panel/pie-chart.png";
import GroupsLogo from "../../img/left-panel/groups.png";
import LocationLogo from "../../img/left-panel/Location.png";
import MedalLogo from "../../img/left-panel/medal.png";
import QuestionMarkLogo from "../../img/left-panel/question-mark.png";


import { MainViz } from "../data_visuals/main-viz.js";
import { GoalViz } from "../data_visuals/goal-viz.js";

export class DashboardView extends Component {
  constructor(props) {
    super(props);
  }

  switchTabs = (event) => {
    this.props.switchTabs(event.target.id);
  }

 

  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col md='3' className='dash-left-pane'>
            <Container>
              <Nav pills vertical className='dash-left-pane-list'>
                <NavItem>
                  <NavLink id='1' className={this.props.tab == 1 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}><img className="nav-icon" top width="10%" src={PieChartLogo} alt="pie chart icon" />Personal Statistics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='2' className={this.props.tab == 2 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}><img className="nav-icon" top width="10%" src={GroupsLogo} alt="community icon" />Find Locations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='3' className={this.props.tab == 3 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}><img className="nav-icon" top width="10%" src={LocationLogo} alt="location icon" />Groups</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='4' className={this.props.tab == 4 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}><img className="nav-icon" top width="10%" src={MedalLogo} alt="medal icon" />Rewards</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='5' className={this.props.tab == 5 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}><img className="nav-icon" top width="10%" src={QuestionMarkLogo} alt="question mark icon" />FAQ</NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Col>


          <Col className="dash-right-pane" md='9'>
            <React.Fragment>
              <main role="main">

                <section className="main-viz">
                  <MainViz />
                </section>

                <section className="card-viz">
                  <Container>
                    <Row>

                      <Col md='4'>
                        <Card className="card">
                          <CardTitle className="card-title">Your Donations</CardTitle>
                          <img className="large-icon" top width="60%" src={PintBloodLogo} alt="pint of blood icon" />
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
                </section>  

              </main>
            </React.Fragment>

          </Col>
        </Row>
      </div>
    )
  }
}