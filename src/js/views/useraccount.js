import React from "react";
import "../../styles/profile.scss";
import { ProfileModal } from "../component/profilemodal";

export const Useraccount = () => {
	return (
		<div>
			<div className="grid-container">
				<div className="profile-card">
					<div className="headline">
						<h5>Personal Settings</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#exampleModal" type="button" />
					</div>
					<ProfileModal title="Personal Settings" />

					<div className="grid">
						<div className="profile-userdata">
							<div className="label">First Name</div>
							<div className="databox">First Name prop</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Last Name</div>
							<div className="databox">Last Name prop</div>
						</div>
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
				<div className="profile-card">
					<div className="headline">
						<h5>Account Settings</h5>
						<i className="fas fa-pen" />
					</div>
					<div className="grid">
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
		</div>
	);
};
