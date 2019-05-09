import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "./SectionFeature.css";

export class LeftSectionFeature extends Component {
	render() {
		return (
			<Container id={this.props.id}>
				<Row className="featurette">
					<Col sm="6" className="left-section">
						<h3 className="featurette-heading">{this.props.number}</h3>
						<h3 className="featurette-heading-title">{this.props.title}</h3>
					</Col>
					<Col sm="6" className="left-section">
						<h1 className="featurette-heading-title">
							{this.props.description}
						</h1>
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
			<Container id={this.props.id}>
				<Row className="featurette">
					<Col sm="6" className="right-section">
						<h1 className="featurette-heading-title">
							{this.props.description}
						</h1>
						<p className="lead">{this.props.content}</p>
					</Col>
					<Col sm="6" className="right-section-number">
						<h3 className="featurette-heading-right">{this.props.number}</h3>
						<h3 className="featurette-heading-title">{this.props.title}</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}
