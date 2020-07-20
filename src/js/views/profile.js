import React from "react";
import PropTypes from "prop-types";

export const Profile = props => {
	return (
		<div>
			<h1>{props.name}</h1>
			{/* profile layout */}
			<div className="profile-layout">
				{/* Left card	 */}
				<div className="leftside">
					{/* about me */}
					<div className="profile-card">
						<div className="headline">
							<h5>About me</h5>
							<i className="fas fa-pen" />
						</div>
						<div>
							<p>About me prop</p>
						</div>
					</div>
					{/* personal settings */}
					<div className="profile-card">
						<div className="headline">
							<h5>Personal Settings</h5>
							<i className="fas fa-pen" />
						</div>
						<div className="profile-row">
							<div className="profile-userdata">
								<div className="label">First Name</div>
								<div className="databox">First Name prop</div>
							</div>
							<div className="profile-userdata">
								<div className="label">Last Name</div>
								<div className="databox">Last Name prop</div>
							</div>
						</div>
						<div className="profile-row">
							<div className="profile-userdata">
								<div className="label">Email</div>
								<div className="databox">Email prop</div>
							</div>
							<div className="profile-userdata">
								<div className="label">Zipcode</div>
								<div className="databox">Zipcode Prop</div>
							</div>
						</div>
					</div>
					{/* account settings */}
					<div className="profile-card">
						<div className="headline">
							<h5>Account Settings</h5>
							<i className="fas fa-pen" />
						</div>
						<div className="profile-row">
							<div className="profile-userdata">
								<div className="label">Username</div>
								<div className="databox">Username prop</div>
							</div>
							<div className="profile-userdata">
								<div className="label">Password</div>
								<div className="databox">Password Prop</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rightside">
					<div className="profile-card">
						<div className="justify-center">
							<div className="profile-pic" />
						</div>
						<div className="justify-center">
							<h4>Name Prop</h4>
						</div>
						<div className="justify-center h4-subtext">Student</div>
						<div className="button">
							<b>Update Profile</b>
						</div>
						<div className="typographic-line" />
					</div>
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = {
	name: PropTypes.string
};
