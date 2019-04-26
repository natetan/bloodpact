import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Media
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import "../navs/MainNavBar.css";
import bloodPactLogo from "../../img/logos/blood-pact-logo.png";

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

	handleSignOut = event => {
		event.preventDefault();
		this.props.handleSignOut();

		// Redirect to home page
		return <Redirect to={"/"} />;
	};

	render() {
		let nav;
		if (this.props.displayName) {
			nav = (
				<Navbar color="light" light expand="md">
					<Link className="nav-links navbar-brand" to="/">
						<Media object src={bloodPactLogo} width="30" height="30" alt="" />
						BloodPact
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className="nav-links nav-link" to="/about">
									About
								</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-links nav-link" to="/help">
									Help
								</Link>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									{this.props.displayName}
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem disabled>{this.props.email}</DropdownItem>
									<DropdownItem onClick={this.handleSignOut}>
										Logout
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			);
		} else {
			nav = (
				<Navbar color="light" light expand="md">
					<Link className="nav-links navbar-brand" to="/">
						<Media object src={bloodPactLogo} width="30" height="30" alt="" />
						BloodPact
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className="nav-links nav-link" to="/help">
									Help
								</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-links nav-link" to="/signup">
									Sign Up
								</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-links nav-link" to="/help">
									Log In
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			);
		}
		return <div>{nav}</div>;
	}
}
