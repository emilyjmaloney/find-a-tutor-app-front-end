import React from "react";
import "../../styles/profile.scss";
import { Profileheader } from "../component/profileheader";

export const Publicprofilestudent = () => {
	return (
		<div>
			<Profileheader id="send-message-button" usertype="Student" />
			<div className="grid-container">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Academic Info</h5>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Subjects I need to learn</h5>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>My Availability</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
