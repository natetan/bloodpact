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
					number={"01. "}
					title={"Problem Statement"}
					description={"About"}
					content={strings.about}
				/>
				<RightSectionFeature
					number={"02. "}
					title={"Mission"}
					description={"Goal"}
					content={strings.about}
				/>
				<LeftSectionFeature
					number={"03. "}
					title={"Solution"}
					description={"Our Product"}
					content={strings.about}
				/>
				<OurTeam number={"04. "} title={"People"} description={"Our Team"} />
			</div>
		);
	}
}
