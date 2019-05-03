import React, { Component } from "react";
import { Container, Media } from "reactstrap";
import "./SinglePerson.css";

export class Person extends Component {
	render() {
		return (
			<Container>
				<Media>
					<Media left href="#">
						<Media
							className="img"
							object
							src={this.props.img}
							width="60"
							height="60"
							alt=""
						/>
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
