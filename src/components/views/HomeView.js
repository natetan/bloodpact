import React, { Component } from "react";
import { BloodPactJumbo } from "../jumbotrons/BloodPactJumbo";
import {
	LeftSectionFeature,
	RightSectionFeature
} from "../featurettes/SectionFeature";
import { Team } from "../Team/Team";
import strings from "../../resources/strings/Strings.json";
import "./HomeView.css";

export class HomeView extends Component {
	render() {
		return (
			<div className="body">
				<BloodPactJumbo />
				<LeftSectionFeature
					id={"problem-section"}
					number={"01. "}
					title={"Problem Statement"}
					description={"About"}
					content={strings.about}
				/>
				<RightSectionFeature
					id={"mission-section"}
					number={"02. "}
					title={"Mission"}
					description={"Goal"}
					content={strings.goal}
				/>
				<LeftSectionFeature
					id={"solution-section"}
					number={"03. "}
					title={"Solution"}
					description={"Our Product"}
					content={strings.product}
				/>
				<Team number={"04. "} title={"People"} description={"Our Team"} />
			</div>
		);
	}
}
