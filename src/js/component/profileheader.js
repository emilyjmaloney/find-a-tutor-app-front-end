import React from "react";
import "../../styles/profile.scss";

export function Profileheader() {
	return (
		<div className="default-cover-image">
			<div className="profile-header">
				<div className="profile-pic" />
				<div>
					<h3>Name Prop</h3>
					<div className="subtext">Student</div>
					<div className="button">Update Photo</div>
				</div>
			</div>
		</div>
	);
}
