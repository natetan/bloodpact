import React, { Component } from "react";
import { BloodPactJumbo } from "../jumbotrons/BloodPactJumbo";
import {
	LeftSectionFeature,
	RightSectionFeature,
	OurTeam
} from "../featurettes/SectionFeature";
import strings from "../../resources/strings/Strings.json";
import "./HomeView.css";

export class HomeView extends Component {
	render() {
		return (
			<div className="body">
				<BloodPactJumbo />
				<LeftSectionFeature
					title={"01. Problem Statement"}
					description={"About"}
					content={strings.about}
				/>
				<RightSectionFeature
					title={"02. Mission"}
					description={"Goal"}
					content={strings.about}
				/>
				<LeftSectionFeature
					title={"03. Solution"}
					description={"Our Product"}
					content={strings.about}
				/>
				<OurTeam title={"04. People"} description={"Our Team"} />
			</div>
		);
	}
}
