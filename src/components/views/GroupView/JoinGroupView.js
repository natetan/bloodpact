import React, { Component } from "react";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardSubtitle,
	CardBody,
	Row,
	CardColumns,
	Col,
	ListGroup,
	ListGroupItem,
	Badge,
	ButtonGroup,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormText
} from "reactstrap";
import "./JoinGroup.css";
import {
	createGroup,
	getAllGroups,
	joinGroup,
	getUserStats
} from "../../../services/CapstoneApi.js";

export class JoinGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Please Select a Group",
			friendlyName: "",
			createdDate: "",
			members: {},
			pintsDonated: 0,
			modal: false,
			groups: {},
			user: {}
		};
		this.toggle = this.toggle.bind(this);
		this.handleJoinGroup = this.handleJoinGroup.bind(this);
	}

	componentDidMount() {
		this.getGroups().then(result => {
			this.setState({
				groups: result
			});
		});
		getUserStats(this.props.uid).then(result =>
			this.setState({
				user: result
			})
		);
	}

	getGroups() {
		let filterGroups = getAllGroups();
		filterGroups.then(res => {
			console.log(res);
			for (var i = 0; i < res.length; i++) {
				if (this.props.uid in res[i].members) {
					console.log(res[i]);
					delete res[i];
				}
			}
		});
		this.setState({
			groups: filterGroups
		});
		return filterGroups;
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	handleClick = (e, data) => {
		this.setState({
			name: data.name,
			members: data.members
		});
	};

	handleJoinGroup = (e, data) => {
		console.log("handle join group was called");
		console.log(data.name);
		this.setState(
			{
				name: data.name,
				members: data.members
			},
			() => {
				let groupKey = this.state.name.replace(/ /g, "-").toLowerCase();
				joinGroup(
					groupKey,
					this.props.uid,
					this.state.user.firstName,
					this.state.user.lastName
				);
			}
		);
	};

	render() {
		console.log("render");
		console.log(this.state.groups);
		let trending = Object.keys(this.state.groups).map((group, index) => {
			return (
				<ListGroupItem className="justify-content-between" key={index}>
					<div className="member-row">
						<span className="member-name">{this.state.groups[group].name}</span>
						<span className="float-right">
							{this.state.groups[group].pintsDonated}
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
					onClick={e => this.handleClick(e, this.state.groups[index])}
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
									{Object.keys(this.state.groups[group].members).length}
								</span>
								<span> Members</span>
							</CardSubtitle>
						</div>
						<ButtonGroup vertical className="button-group">
							{/* <Button className="bg-info">Info</Button> */}
							<Button
								className="join-group-button"
								color="danger"
								onClick={e => this.handleJoinGroup(e, this.state.groups[index])}
							>
								Join
							</Button>
						</ButtonGroup>
					</CardBody>
				</Card>
			);
			// if (!(this.props.uid in this.state.groups[group].members)) {

			// }
		});

		return (
			<div className="join-group">
				<Form className="search-form">
					<FormGroup className="search-form-group">
						<Input
							type="search"
							name="search-group"
							id="searchGroup"
							placeholder="Search Groups.."
							className="search-bar"
						/>
					</FormGroup>
				</Form>
				<Row>
					<Col md={8}>
						<div className="groups-left-section">
							<CardColumns md={4} className="card-col">
								{groups}
								<Card className="single-card">
									<CardImg top src="" alt="Card image cap" />
									<CardBody
										className="single-card-body"
										style={{ textAlign: "center" }}
									>
										<CardTitle>Create Your Own Group</CardTitle>
										<ButtonGroup vertical className="button-group">
											{/* <Button className="bg-info">Info</Button> */}
											{/* <Button className="join-group-button" color="danger">
												Create
                      </Button> */}
											<Button
												className="join-group-button"
												color="danger"
												onClick={this.toggle}
											>
												Create
											</Button>
											<Modal
												isOpen={this.state.modal}
												toggle={this.toggle}
												className={this.props.className}
											>
												<ModalHeader toggle={this.toggle}>
													Create Group Form
												</ModalHeader>
												<ModalBody>
													<Form>
														<FormGroup row>
															<Label for="group-name" sm={2}>
																Group Name
															</Label>
															<Col sm={10}>
																<Input
																	type="group"
																	name="group-name"
																	id="groupName"
																	placeholder="Input Group Name"
																/>
															</Col>
														</FormGroup>
														<FormGroup row>
															<Label for="first-name" sm={2}>
																First Name
															</Label>
															<Col sm={10}>
																<Input
																	type="first-name"
																	name="first-name"
																	id="firstName"
																	placeholder="Input your first name"
																/>
															</Col>
														</FormGroup>
														<FormGroup row>
															<Label for="last-name" sm={2}>
																Last Name
															</Label>
															<Col sm={10}>
																<Input
																	type="last-name"
																	name="last-name"
																	id="lastName"
																	placeholder="Input your last name"
																/>
															</Col>
														</FormGroup>
														<FormGroup row>
															<Label for="pints-donated" sm={2}>
																Pints Donated
															</Label>
															<Col sm={10}>
																<Input
																	type="pints-donated"
																	name="pints-donated"
																	id="pintsDonated"
																	placeholder="Input pints donated"
																/>
															</Col>
														</FormGroup>
														<FormGroup row>
															<Label for="exampleFile" sm={2}>
																Group Picture
															</Label>
															<Col sm={10}>
																<Input
																	type="file"
																	name="file"
																	id="exampleFile"
																/>
																<FormText color="muted">
																	Upload a group picture.
																</FormText>
															</Col>
														</FormGroup>
													</Form>
												</ModalBody>
												<ModalFooter>
													<Button
														className="join-group-button"
														color="danger"
														onClick={this.toggle}
													>
														Create
													</Button>{" "}
													<Button
														color="secondary"
														// onClick={createGroup(
														// 	"swag",
														// 	"huh?",
														// 	"Boi",
														// 	"ching",
														// 	10
														// )}
													>
														Cancel
													</Button>
												</ModalFooter>
											</Modal>
										</ButtonGroup>
									</CardBody>
								</Card>
							</CardColumns>
						</div>
					</Col>
					<Col md={4}>
						<Card>
							<CardBody>
								<CardTitle className="trending-title">Trending</CardTitle>
								{trending}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
