import React, { Component } from "react";
import { Jumbotron, Button, Media } from "reactstrap";
import { Link } from "react-router-dom";
import "./BloodPactJumbo.css";
import scrollDownImg from "../../img/landingPage/downArrow.png";

export class BloodPactJumbo extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="jumbo">
					<h1 className="display-4">
						Your blood has the power to help millions.
					</h1>
					<p className="lead">Donate. Save Lives.</p>
					<Button
						className="jumboButton"
						buttonstyle={{ borderRadius: 50 }}
						style={{
							borderRadius: 50,
							backgroundColor: "#ff0000",
							borderColor: "#ff0000"
						}}
					>
						<Link id="donor-button" to="/signup">
							BECOME A DONOR TODAY
						</Link>
					</Button>
				</Jumbotron>
				<Media
					className="scrollDown"
					object
					src={scrollDownImg}
					width="60"
					height="60"
					alt=""
				/>
			</div>
		);
	}
}
