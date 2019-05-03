import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "./SectionFeature.css";
import { Person } from "./SinglePerson";

export class LeftSectionFeature extends Component {
	render() {
		return (
			<Container>
				<Row className="featurette">
					<Col sm="6" className="left-section">
						<h3 className="featurette-heading">
							{this.props.number}
							{this.props.title}
						</h3>
					</Col>
					<Col sm="6" className="left-section">
						<h1 className="featurette-heading">{this.props.description}</h1>
						<p className="lead">{this.props.content}</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

export class RightSectionFeature extends Component {
	render() {
		return (
			<Container>
				<Row className="featurette">
					<Col sm="6" className="right-section">
						<h1 className="featurette-heading">{this.props.description}</h1>
						<p className="lead">{this.props.content}</p>
					</Col>
					<Col sm="6" className="right-section">
						<h3 className="featurette-heading-right">
							{this.props.number}
							{this.props.title}
						</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}

export class OurTeam extends Component {
	render() {
		return (
			<Container>
				<Row className="featurette">
					<Col sm="6" className="right-section">
						<h1 className="featurette-heading">{this.props.description}</h1>
						<Person person="Yulong Tan" role="Project Mangaer & Developer" />
						<Person person="Phillip Park" role="Developer" />
						<Person person="Madison Smith" role="Researcher & Developer" />
						<Person
							className="lastPerson"
							person="Varun Mehra"
							role="Designer"
						/>
					</Col>
					<Col sm="6" className="right-section">
						<h3 className="featurette-heading-right">
							{this.props.number}
							{this.props.title}
						</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}
