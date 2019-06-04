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
} from "../../../../services/CapstoneApi.js";

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
			user: {},
			modal: false,
			formGroupName: ""
		};
		this.toggle = this.toggle.bind(this);
		this.handleJoinGroup = this.handleJoinGroup.bind(this);
		this.postNewGroup = this.postNewGroup.bind(this);
	}

	componentDidMount() {
		this.filterGroups();
		getUserStats(this.props.uid).then(result =>
			this.setState({
				user: result
			})
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.groups === this.state.groups) {
			this.filterGroups();
		}
	}

	filterGroups() {
		getAllGroups().then(result => {
			for (var i = 0; i < result.length; i++) {
				if (result[i].members !== undefined) {
					if (this.props.uid in result[i].members) {
						delete result[i];
					}
				}
			}
			this.setState({
				groups: result
			});
		});
	}

	toggle() {
		console.log("toggle was called");
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	handleClick = groupName => {
		let groupKey = groupName.replace(/ /g, "-").toLowerCase();
		this.setState({
			name: groupKey
		});
	};

	handleJoinGroup = groupName => {
		let groupKey = groupName.replace(/ /g, "-").toLowerCase();
		joinGroup(
			groupKey,
			this.props.uid,
			this.state.user.firstName,
			this.state.user.lastName
		).then(this.filterGroups());

		// disgusting;
		setTimeout(() => {
			this.filterGroups();
		}, 100);
	};

	postNewGroup() {
		createGroup(
			this.state.formGroupName,
			this.props.uid,
			this.state.user.firstName,
			this.state.user.lastName,
			this.state.user.pintsDonated
		).then(this.toggle());
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state.formGroupName);
	}

	handleSubmit = event => {
		console.log("handle submit was called");
		event.preventDefault();
	};

	render() {
		console.log("joingroup render");

		let trending = Object.keys(this.state.groups).map(group => {
			return (
				<ListGroupItem className="justify-content-between" key={group}>
					<div className="member-row">
						<span className="member-name">{this.state.groups[group].name}</span>
						<span className="float-right">
							{this.state.groups[group].pintsDonated}
						</span>
					</div>
				</ListGroupItem>
			);
		});

		let groups = Object.keys(this.state.groups).map(group => {
			return (
				<Card
					className="single-card"
					id={this.state.groups[group].friendlyName}
					key={group}
					defaultChecked={false}
					onClick={this.handleClick.bind(null, this.state.groups[group].name)}
				>
					<CardBody
						className="single-card-body"
						style={{ textAlign: "center" }}
					>
						<CardTitle>{this.state.groups[group].name}</CardTitle>
						<div className="card-sub">
							<CardSubtitle className="member">
								<span className="member-number">
									{this.state.groups[group].members
										? Object.keys(this.state.groups[group].members).length
										: 0}
								</span>
								<span> Members</span>
							</CardSubtitle>
						</div>
						<ButtonGroup vertical className="button-group">
							{/* <Button className="bg-info">Info</Button> */}
							<Button
								className="join-group-button"
								color="danger"
								onClick={this.handleJoinGroup.bind(
									null,
									this.state.groups[group].name
								)}
							>
								Join
							</Button>
						</ButtonGroup>
					</CardBody>
				</Card>
			);
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
																	name="formGroupName"
																	id="formGroupName"
																	placeholder="Input Group Name"
																	onChange={event => this.handleChange(event)}
																/>
															</Col>
														</FormGroup>

														{/* <FormGroup row>
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
														</FormGroup> */}
														{/* <FormGroup row>
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
														</FormGroup> */}
													</Form>
												</ModalBody>
												<ModalFooter>
													<Button
														className="join-group-button"
														color="danger"
														onClick={this.toggle}
														onClick={this.postNewGroup}
													>
														Create
													</Button>
													<Button color="secondary" onClick={this.toggle}>
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
