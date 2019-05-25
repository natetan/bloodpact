import React, { Component } from "react";
import {
	Card,
	Button,
	Container,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody,
	Row,
	CardColumns,
	Col,
	ListGroup,
	ListGroupItem,
	Badge,
	ButtonGroup
} from "reactstrap";
import "./MyGroups.css";
import picture from "../../../img/logos/blood-pact-logo.png";
import pie from "../../../img/left-panel/pie-chart.png";
import {GroupsPlot} from "./GroupsPlot.js"

export class MyGroups extends Component {
	handleClick = e => {
		console.log(e.target);
	};

	render() {
		let data = [
			{
				name: "New Yorkers",
				friendlyName: "new-yorkers",
				createdDate: "2019-05-14",
				members: {
					phillip: {
						firstName: "Phil",
						lastName: "Park",
						pintsDonated: 3
					}
				},
				pintsDonated: 3
			},
			{
				createdDate: "2019-05-16",
				friendlyName: "university-of-california",
				members: {
					tester: {
						firstName: "test",
						lastName: "test"
					},
					ytango: {
						firstName: "Yulong",
						lastName: "Tan"
					}
				},
				name: "University of California",
				pintsDonated: 3
			},
			{
				createdDate: "2019-05-10",
				friendlyName: "university-of-washington",
				members: {
					test: "test"
				},
				name: "University of Washington",
				pintsDonated: 0
			}
		];
		let groups = data.map((group, index) => {
			return (
				<Card className="single-card" id={group.friendlyName} key={index}>
					<CardImg top src="" alt="Card image cap" />
					<CardBody
						className="single-card-body"
						style={{ textAlign: "center" }}
					>
						<CardTitle>{group.name}</CardTitle>
						<div className="card-sub">
							<CardSubtitle className="member">
								<span className="member-number">
									{" "}
									{Object.keys(group.members).length}{" "}
								</span>
								<span>Members</span>
							</CardSubtitle>
						</div>
						<ButtonGroup vertical className="button-group">
							{/* <Button className="bg-info">Info</Button> */}
							<Button className="leave-group-button" color="danger">
								Leave Group
							</Button>
						</ButtonGroup>
						{/* <ButtonGroup>
					
						</ButtonGroup> */}
					</CardBody>
				</Card>
			);
		});

		let selectGroup = "";
		return (
			<div className="my-group">
				<Row>
					<Col md={8}>
						<div className="groups-left-section">
							<CardColumns md={4} className="card-col">
								{groups}
							</CardColumns>
						</div>
					</Col>
					<Col md={4}>
						<Card>
							<CardImg top src="" alt="Card image cap" />
							<CardBody>
								<CardTitle>Givers</CardTitle>
								<CardSubtitle style={{ textAlign: "center" }}>
									451 Members
								</CardSubtitle>
								<p>Members</p>
								<ListGroup>
									<ListGroupItem className="justify-content-between">
										<div className="member-row">
											<p className="member-name"> Madison S.</p>
											<p className="pints-donated">14 Pints</p>
										</div>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										<div className="member-row">
											<p className="member-name"> Varun M.</p>
											<p className="pints-donated">5 Pints</p>
										</div>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										<div className="member-row">
											<p className="member-name"> Yulong T.</p>
											<p className="pints-donated">1 Pints</p>
										</div>
									</ListGroupItem>
								</ListGroup>
								<GroupsPlot/>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
