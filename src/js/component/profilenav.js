import React from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";
import { Select } from "react-select";

export default class Profilenav extends React.Component {
	// export function Profilenav() {
	constructor() {
		super();
		this.state = {
			clickedLink: null
		};
	}
	render() {
		let navSelected = "";
		if (this.state.clickedLink == "second-nav-link") navSelected = "selected";

		return (
			<div>
				<div className="grid-container">
					<div className="second-nav">
						<Link to="/adminstudent">
							<div
								className={"second-nav-link" + navSelected}
								onClick={() => this.setState({ clickedLink: "second-nav-link" })}>
								Profile
							</div>
						</Link>
						<Link to="/useraccount">
							<div className="second-nav-link">Account Settings</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
