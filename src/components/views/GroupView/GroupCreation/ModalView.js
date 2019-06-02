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
import {
	createGroup,
	getAllGroups,
	joinGroup
} from "../../../../services/CapstoneApi.js";

export class ModalView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Please Select a Group",
			friendlyName: "",
			createdDate: "",
			members: {},
			pintsDonated: 0,
			modal: false,
			groups: {}
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	handleClick = (e, data) => {
		console.log(data.members);
		this.setState({
			name: data.name,
			members: data.members
		});
		console.log("state members" + this.state.members);
	};

	handleJoinGroup = () => {
		console.log(this.props.uid);
		joinGroup(
			this.state.name,
			this.props.uid,
			this.props.user.firstName,
			this.props.user.lastName
		);
	};

	render() {
		return (
			<div className="join-group">
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>Create Group Form</ModalHeader>
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
									<Input type="file" name="file" id="exampleFile" />
									<FormText color="muted">Upload a group picture.</FormText>
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
			</div>
		);
	}
}
