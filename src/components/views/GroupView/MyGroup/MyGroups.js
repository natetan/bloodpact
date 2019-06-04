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
// import picture from "../../../img/logos/blood-pact-logo.png";
// import pie from "../../../img/left-panel/pie-chart.png";
import { GroupsPlot } from "../GroupPlot/GroupsPlot";
import {
	getUserGroups,
	leaveGroup,
	getUserStats,
	deleteGroup
} from "../../../../services/CapstoneApi";

export class MyGroups extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Please Select a Group",
			friendlyName: "",
			createdDate: "",
			members: {},
			pintsDonated: 0,
			groups: {}
		};
		this.handleLeaveGroup = this.handleLeaveGroup.bind(this);
	}

	componentDidMount() {
		this.setUserGroups();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.groups === this.state.groups) {
			this.setUserGroups();
		}
	}

	setUserGroups() {
		console.log("sset user groups");
		getUserGroups(this.props.uid).then(result =>
			this.setState({
				groups: result
			})
		);
	}

	handleClick = (groupName, groupMembers) => {
		this.setState({
			name: groupName,
			members: groupMembers
		});
	};

	handleLeaveGroup = (groupName, groupMembers) => {
		let groupKey = groupName.replace(/ /g, "-").toLowerCase();
		if (groupMembers === 1) {
			deleteGroup(groupKey).then(this.setUserGroups());
		} else {
			leaveGroup(groupKey, this.props.uid).then(this.setUserGroups());
		}
		setTimeout(() => {
			this.setUserGroups();
		}, 100);
	};

	// getMemberPintsDonated(uid) {
	// 	let pints;
	// 	getUserStats(uid).then(result => {
	// 		pints = result.pintsDonated;
	// 	});
	// 	return pints;
	// }

	render() {
		console.log("mygroup render");

		const items = Object.keys(this.state.members).map(member => {
			// console.log(this.getMemberPintsDonated(member));
			return (
				<ListGroupItem className="justify-content-between" key={member}>
					<div className="member-row">
						<span className="member-name">
							{this.state.members[member].firstName +
								" " +
								this.state.members[member].lastName}
						</span>
						{/* <span className="float-right">
							{this.state.members[member].pintsDonated} Pints
						</span> */}
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
					onClick={this.handleClick.bind(
						null,
						this.state.groups[group].name,
						this.state.groups[group].members
					)}
				>
					<CardBody
						className="single-card-body"
						style={{ textAlign: "center" }}
					>
						<CardTitle>{this.state.groups[group].name}</CardTitle>
						<div className="card-sub">
							<CardSubtitle className="member">
								<span className="member-number">
									{Object.keys(this.state.groups[group].members).length}
								</span>
								<span> Members</span>
							</CardSubtitle>
						</div>
						<ButtonGroup vertical className="button-group">
							{/* <Button className="bg-info">Info</Button> */}
							<Button
								onClick={this.handleLeaveGroup.bind(
									null,
									this.state.groups[group].name,
									Object.keys(this.state.groups[group].members).length
								)}
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
								<div id="groups-plot-container">
									<div id="group-plot-title">Goal</div>
									<GroupsPlot id="test" />
									<div id="group-plot-stat">200 Pints</div>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
