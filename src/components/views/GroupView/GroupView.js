import React, { Component } from "react";
import "./GroupView.css";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import classnames from "classnames";
import { MyGroups } from "./MyGroup/MyGroups";
import { JoinGroup } from "./JoinGroup/JoinGroupView";

export class GroupView extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTabGroup: "1"
		};
	}

	toggle(tab) {
		if (this.state.activeTabGroup !== tab) {
			this.setState({
				activeTabGroup: tab
			});
		}
	}
	render() {
		return (
			<div className="group">
				<h1 className="groupHeader">JOIN.DONATE.COMPETE</h1>

				<Nav pills className="group-tabs">
					<NavItem className="tabs">
						<NavLink
							className={classnames({
								active: this.state.activeTabGroup === "1"
							})}
							onClick={() => {
								this.toggle("1");
							}}
						>
							My Groups
						</NavLink>
					</NavItem>
					<NavItem className="tabs">
						<NavLink
							className={classnames({
								active: this.state.activeTabGroup === "2"
							})}
							onClick={() => {
								this.toggle("2");
							}}
						>
							Join Groups
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTabGroup}>
					<TabPane tabId="1">
						<MyGroups uid={this.props.uid} />
					</TabPane>
					<TabPane tabId="2">
						<JoinGroup uid={this.props.uid} />
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
