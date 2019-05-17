import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import "./DashboardView.css";
import PieChartLogo from "../../img/left-panel/pie-chart.png";
import PieChartLogoInverted from "../../img/left-panel/pie-chart-inverted.png";
import GroupsLogo from "../../img/left-panel/groups.png";
import GroupsLogoInverted from "../../img/left-panel/groups-inverted.png";
import LocationLogo from "../../img/left-panel/Location.png";
import LocationLogoInverted from "../../img/left-panel/location-inverted.png";
import MedalLogo from "../../img/left-panel/medal.png";
import MedalLogoInverted from "../../img/left-panel/medal-inverted.png";
import QuestionMarkLogo from "../../img/left-panel/question-mark.png";
import QuestionMarkLogoInverted from "../../img/left-panel/question-mark-inverted.png";
import { StatisticsView } from "./StatisticsView/StatisticsView";
import { SearchView } from "./SearchView/SearchView";
import { getDrives } from "../../services/CapstoneApi";
import { GroupView } from "./GroupView/GroupView";

export class DashboardView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			drives: [],
			zipcode: ""
		};
	}
	switchTabs = event => {
		this.props.switchTabs(event.target.id);
	};

	handleZipcodeInput = code => {
		this.setState({ zipcode: code });
	};

	handleSearch = zipcode => {
		this.setState({
			loading: true,
			drives: []
		});
		getDrives(zipcode)
			.then(data => {
				this.setState({ drives: data });
			})
			.then(() => {
				this.setState({ loading: false });
			});
	};

	render() {
		let content;

		switch (Number(this.props.tab)) {
			case 1:
				content = <StatisticsView userStats={this.props.userStats}/>;
				break;
			case 2:
				content = (
					<SearchView
						drives={this.state.drives}
						loading={this.state.loading}
						handleSearch={this.handleSearch}
						zipcode={this.state.zipcode}
						handleZipcodeInput={this.handleZipcodeInput}
					/>
				);
				break;
			case 3:
				content = <GroupView />;
				break;
			case 4:
				content = <div>{"Not implemented"}</div>;
				break;
			default:
				content = <div>{"Not implemented"}</div>;
				break;
		}

		return (
			<div className="dashboard">
				<Row>
					<Col md="3" className="dash-left-pane">
						<Container>
							<Nav pills vertical className="dash-left-pane-list">
								<NavItem>
									<NavLink
										id="1"
										className={
											this.props.tab == 1 ? "isActive" : "dash-nav-item"
										}
										onClick={this.switchTabs}
									>
										<img
											className="nav-icon"
											width="10%"
											src={
												this.props.tab == 1
													? PieChartLogo
													: PieChartLogoInverted
											}
											alt="pie chart icon"
										/>
										Personal Statistics
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										id="2"
										className={
											this.props.tab == 2 ? "isActive" : "dash-nav-item"
										}
										onClick={this.switchTabs}
									>
										<img
											className="nav-icon"
											width="10%"
											src={
												this.props.tab == 2
													? LocationLogoInverted
													: LocationLogo
											}
											alt="location icon"
										/>
										Find Locations
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										id="3"
										className={
											this.props.tab == 3 ? "isActive" : "dash-nav-item"
										}
										onClick={this.switchTabs}
									>
										<img
											className="nav-icon"
											width="10%"
											src={
												this.props.tab == 3 ? GroupsLogoInverted : GroupsLogo
											}
											alt="community icon"
										/>
										Groups
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										id="4"
										className={
											this.props.tab == 4 ? "isActive" : "dash-nav-item"
										}
										onClick={this.switchTabs}
									>
										<img
											className="nav-icon"
											width="10%"
											src={this.props.tab == 4 ? MedalLogoInverted : MedalLogo}
											alt="medal icon"
										/>
										Rewards
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										id="5"
										className={
											this.props.tab == 5 ? "isActive" : "dash-nav-item"
										}
										onClick={this.switchTabs}
									>
										<img
											className="nav-icon"
											width="10%"
											src={
												this.props.tab == 5
													? QuestionMarkLogoInverted
													: QuestionMarkLogo
											}
											alt="question mark icon"
										/>
										FAQ
									</NavLink>
								</NavItem>
							</Nav>
						</Container>
					</Col>

					<Col className="dash-right-pane" md="9">
						{content}
					</Col>
				</Row>
			</div>
		);
	}
}
