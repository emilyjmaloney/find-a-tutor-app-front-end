import React from "react";
import "../../styles/profile.scss";

export const Searchcard = () => {
	return (
		<div className="profile-card searchstyles">
			<div className="searchcard-grid">
				<div className="photo-center">
					<div className="search-profile-photo" />
				</div>
				<div>
					<h4>Jane Doe</h4>
					<div className="search-usertype">Usertype Prop</div>
					<div>Grade Prop</div>
				</div>
				<div>
					<div className="line-with-icon">
						<i className="fas fa-map-marker-alt" />
						<div>Miles Away Prop</div>
					</div>
					<div className="line-with-icon">
						<i className="fas fa-check" />
						<div>online prop</div>
					</div>
				</div>
				<div className="button">View Profile</div>
			</div>
		</div>
	);
};
