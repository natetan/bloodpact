import React, { Component } from 'react';
import { Button, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './DashboardView.css';

export class DashboardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col md='3' className='dash-left-pane'>
            <div>
              <h3>BloodPact</h3>
              <Nav pills vertical>
                <NavItem>
                  <NavLink className={this.props.tab == 1 ? 'isActive' : ''}>Personal Statistics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={this.props.tab == 2 ? 'isActive' : ''}>Find Locations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={this.props.tab == 3 ? 'isActive' : ''}>Groups</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={this.props.tab == 4 ? 'isActive' : ''}>Rewards</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={this.props.tab == 5 ? 'isActive' : ''}>FAQ</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md='9'>
            <div>
              <h3>Anchors</h3>
              <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
              <ListGroup>
                <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}