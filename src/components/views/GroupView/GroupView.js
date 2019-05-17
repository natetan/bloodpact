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
	Col
} from "reactstrap";
import classnames from "classnames";
import MyGroup, { MyGroups } from "./MyGroups";
import JoinGroups, { JoinGroup } from "./JoinGroupView";

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
				<Nav tabs>
					<NavItem>
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
					<NavItem>
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
						<MyGroups />
					</TabPane>
					<TabPane tabId="2">
						<JoinGroup />
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
