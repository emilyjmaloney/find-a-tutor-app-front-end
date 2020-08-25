import React from "react";
import "../../styles/profile.scss";

export const Publicprofiletutor = () => {
	return (
<div>
    <Profileheader id="send-message-button" usertype="Tutor" />
    <div className="grid-container">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Experience Info</h5>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Subjects I Teach</h5>
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
