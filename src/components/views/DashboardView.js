import React, { Component } from 'react';
import {
  Container, Row, Col, Nav, NavItem, NavLink
} from 'reactstrap';
import './DashboardView.css';
import PieChartLogo from "../../img/left-panel/pie-chart.png";
import GroupsLogo from "../../img/left-panel/groups.png";
import LocationLogo from "../../img/left-panel/Location.png";
import MedalLogo from "../../img/left-panel/medal.png";
import QuestionMarkLogo from "../../img/left-panel/question-mark.png";
import { StatisticsView } from './StatisticsView/StatisticsView';

export class DashboardView extends Component {
  constructor(props) {
    super(props);
  }


  switchTabs = (event) => {
    this.props.switchTabs(event.target.id);
  }

  render() {
    let content;

    switch (Number(this.props.tab)) {
      case 1:
        content = <StatisticsView />;
        break;
      case 2:
        content = <div>{'Not implemented'}</div>
        break;
      case 3:
        content = <div>{'Not implemented'}</div>
        break;
      case 4:
        content = <div>{'Not implemented'}</div>
        break;
      default:
        content = <div>{'Not implemented'}</div>
        break;
    }

    return (
      <div className='dashboard'>
        <Row>
          <Col md='3' className='dash-left-pane'>
            <Container>
              <Nav pills vertical className='dash-left-pane-list'>
                <NavItem>
                  <NavLink id='1' className={this.props.tab == 1 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>
                    <img className="nav-icon" width="10%" src={PieChartLogo} alt="pie chart icon" />Personal Statistics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='2' className={this.props.tab == 2 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>
                    <img className="nav-icon" width="10%" src={GroupsLogo} alt="community icon" />Find Locations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='3' className={this.props.tab == 3 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>
                    <img className="nav-icon" width="10%" src={LocationLogo} alt="location icon" />Groups
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='4' className={this.props.tab == 4 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>
                    <img className="nav-icon" width="10%" src={MedalLogo} alt="medal icon" />Rewards
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id='5' className={this.props.tab == 5 ? 'isActive' : 'dash-nav-item'} onClick={this.switchTabs}>
                    <img className="nav-icon" width="10%" src={QuestionMarkLogo} alt="question mark icon" />FAQ
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Col>


          <Col className="dash-right-pane" md='9'>
            {content}
          </Col>
        </Row>
      </div>
    )
  }
}