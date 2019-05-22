import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Person } from "./Person";
import "./Team.css";
import Madison from "../../img/teamPics/madison.png";
import Phillip from "../../img/teamPics/phillip.jpeg";
import Varun from "../../img/teamPics/varun.png";
import Yulong from "../../img/teamPics/yulong.png";

export class Team extends Component {
	render() {
		return (
			<Container>
				<Row className="featurette">
					<Col sm="6" className="right-section">
						<h1 className="featurette-heading-title">
							{this.props.description}
						</h1>
						<Person person="Yulong Tan" projectRole="Project Manager & Developer" img={Yulong} />
						<Person person="Phillip Park" projectRole="Developer" img={Phillip} />
						<Person person="Madison Smith" projectRole="Researcher & Developer" img={Madison}
						/>
						<Person className="lastPerson" person="Varun Mehra" projectRole="Designer" img={Varun}
						/>
					</Col>
					<Col sm="6" className="right-section">
						<h3 className="featurette-heading-right">{this.props.number}</h3>
						<h3 className="featurette-heading-title">{this.props.title}</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}
