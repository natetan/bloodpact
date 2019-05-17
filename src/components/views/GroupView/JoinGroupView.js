import React, { Component } from "react";
import {
	Card,
	Button,
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
	Badge
} from "reactstrap";
import "./MyGroups.css";
import picture from "../../../img/logos/blood-pact-logo.png";

export class JoinGroup extends Component {
	render() {
		return (
			<div className="my-group">
				<Row>
					<Col>
						<CardColumns className="card-col">
							<Card className="single-card">
								<CardImg
									top
									src={picture}
									syle={{ height: "20px", width: "20px" }}
									alt="Card image cap"
								/>
								<CardBody
									className="single-card-body"
									style={{ textAlign: "center" }}
								>
									<CardTitle>Seattle Lite</CardTitle>
									<CardSubtitle>1276 Members</CardSubtitle>
									<Button>Join</Button>
								</CardBody>
							</Card>
							<Card className="single-card">
								<CardImg
									src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
									alt="Card image cap"
									style={{ height: "10px", width: "10px" }}
								/>
								<CardBody style={{ textAlign: "center" }}>
									<CardTitle>Thankful Gorilla</CardTitle>
									<CardSubtitle>4 Members</CardSubtitle>
									<Button>Join</Button>
								</CardBody>
							</Card>
							<Card className="single-card">
								<CardImg
									top
									width="100%"
									src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
									alt="Card image cap"
								/>
								<CardBody style={{ textAlign: "center" }}>
									<CardTitle>Water Girls</CardTitle>
									<CardSubtitle>42 Members</CardSubtitle>
									<Button>Join</Button>
								</CardBody>
							</Card>
							<Card className="single-card">
								<CardImg
									top
									width="100%"
									src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
									alt="Card image cap"
								/>
								<CardBody style={{ textAlign: "center" }}>
									<CardTitle>Takers</CardTitle>
									<CardSubtitle>451 Members</CardSubtitle>
									<Button>Join</Button>
								</CardBody>
							</Card>
						</CardColumns>
					</Col>
					<Card className="single-card">
						<CardImg
							top
							width="100%"
							src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
							alt="Card image cap"
						/>
						<CardBody>
							<CardTitle>Givers</CardTitle>
							<CardSubtitle style={{ textAlign: "center" }}>
								451 Members
							</CardSubtitle>
							<p>Members</p>
							<ListGroup>
								<ListGroupItem className="justify-content-between">
									Madison S.
									<Badge pill>14 Pints</Badge>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between">
									Yulong T. <Badge pill>2 Pints</Badge>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between">
									Varun M. <Badge pill>1 Pints</Badge>
								</ListGroupItem>
							</ListGroup>
						</CardBody>
					</Card>
				</Row>
			</div>
		);
	}
}
