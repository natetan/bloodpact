import React, { Component } from "react";
import { Container, Media } from "reactstrap";
import "./SinglePerson.css";
import bloodPactLogo from "../../img/logos/blood-pact-logo.png";

export class Person extends Component {
	render() {
		return (
			<Container className="container">
				<Media>
					<Media left href="#">
						<Media object src={bloodPactLogo} width="60" height="60" alt="" />
					</Media>
					<Media body className="personDescription">
						<Media className="name">{this.props.person}</Media>
						{this.props.role}
					</Media>
				</Media>
			</Container>
		);
	}
}
