import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import './VerticalNav.css' <-- this fails for some reason (look into it)

export class VerticalNav extends Component {
	render() {
		return (
			<div className="vertical-nav-bar">
				<h3>BloodPact</h3>
				<Nav pills vertical>
					<NavItem>
						<NavLink className={this.props.tab == 1 ? "isActive" : ""}>
							Personal Statistics
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.props.tab == 2 ? "isActive" : ""}>
							Find Locations
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.props.tab == 3 ? "isActive" : ""}>
							Groups
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.props.tab == 4 ? "isActive" : ""}>
							Rewards
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={this.props.tab == 5 ? "isActive" : ""}>
							FAQ
						</NavLink>
					</NavItem>
				</Nav>
			</div>
		);
	}
}
