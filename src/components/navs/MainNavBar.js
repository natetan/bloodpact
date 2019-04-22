import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import './MainNavBar.css'

export class MainNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSignOut = (event) => {
    event.preventDefault();
    this.props.handleSignOut();

    // Redirect to home page
    return <Redirect to={'/'} />
  }

  render() {
    let nav;
    if (this.props.displayName) {
      nav = (
        <Navbar color="dark" dark expand="md">
          <Link className='nav-links navbar-brand' to='/'>#bloodpact</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-links nav-link' to='/about'>About</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-links nav-link' to='/help'>Help</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>{this.props.displayName}</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem disabled>{this.props.email}</DropdownItem>
                  <DropdownItem onClick={this.handleSignOut}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      )
    } else {
      nav = (
        <Navbar color="dark" dark expand="md">
          <Link className='nav-links navbar-brand' to='/'>#bloodpact</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-links nav-link' to='/about'>About</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-links nav-link' to='/help'>Help</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className='links' to='/signup/'>Sign Up</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className='links' to='/signin/'>Log In</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      );
    }
    return (
      <div>
        {nav}
      </div>
    );
  }
}