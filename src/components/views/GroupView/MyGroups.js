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
import { getUserGroups } from "../../../services/CapstoneApi";

export class MyGroups extends Component {
	constructor(props) {
		super(props);
		this.leaveGroup = this.leaveGroup.bind(this);
		this.state = {
			name: "Please Select a Group",
			friendlyName: "",
			createdDate: "",
			members: {},
			pintsDonated: 0,
			groups: {}
		};
	}

	componentDidMount() {
		this.getGroups().then(result =>
			this.setState({
				groups: result
			})
		);
	}

	getGroups() {
		return getUserGroups();
	}

	handleClick = (e, data) => {
		this.setState({
			name: data.name,
			members: data.members
		});
		console.log("state members" + this.state.members);
	};

	leaveGroup = (e, data) => {
		// take away group from data
		delete data[0];
		console.log(data);
		console.log(data.name);

		// set states without to new data values to re-render page without group
		this.setState(
			{
				name: data.name
			},
			() => console.log(this.state.name)
		);
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
						lastName: "test",
						pintsDonated: 3
					},
					ytango: {
						firstName: "Yulong",
						lastName: "Tan",
						pintsDonated: 3
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
		// let test = getUserGroups(this.props.uid);
		// test.then(function(result) {
		// 	console.log(test);
		// });
		const items = Object.keys(this.state.members).map((member, index) => {
			return (
				<ListGroupItem className="justify-content-between" key={index}>
					<div className="member-row">
						<span className="member-name">
							{this.state.members[member].firstName +
								" " +
								this.state.members[member].lastName}
						</span>
						<span className="float-right">
							{this.state.members[member].pintsDonated} Pints
						</span>
					</div>
				</ListGroupItem>
			);
		});

		let groups = Object.keys(this.state.groups).map((group, index) => {
			return (
				<Card
					className="single-card"
					id={this.state.groups[group].friendlyName}
					key={index}
					defaultChecked={false}
					onClick={e => this.handleClick(e, data[index])}
				>
					{/* <CardImg top src="" alt="Card image cap" /> */}
					<CardBody
						className="single-card-body"
						style={{ textAlign: "center" }}
					>
						<CardTitle>{this.state.groups[group].name}</CardTitle>
						<div className="card-sub">
							<CardSubtitle className="member">
								<span className="member-number">
									{" "}
									{Object.keys(this.state.groups[group].members).length}
								</span>
								<span> Members</span>
							</CardSubtitle>
						</div>
						<ButtonGroup vertical className="button-group">
							{/* <Button className="bg-info">Info</Button> */}
							<Button
								onClick={e => this.leaveGroup(e, data[index])}
								className="leave-group-button"
								color="danger"
							>
								Leave
							</Button>
						</ButtonGroup>
					</CardBody>
				</Card>
			);
		});

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
								<CardTitle>{this.state.name}</CardTitle>
								<CardSubtitle style={{ textAlign: "center" }}>
									{Object.keys(this.state.members).length} Members
								</CardSubtitle>
								<p>Members</p>
								<ListGroup>{items}</ListGroup>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
