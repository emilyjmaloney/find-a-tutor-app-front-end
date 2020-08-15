import React from "react";
import "../../styles/profile.scss";
import { ProfileModal } from "../component/profilemodal";
import { Weeklyavailability } from "../component/weeklyavailability";

export const Adminstudent = () => {
	return (
		<div>
			<div className="grid-container">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#exampleModal" type="button" />
					</div>
					<ProfileModal title="About Me" />
					<div>
						<p>About me prop</p>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Academic Info</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#exampleModal" type="button" />
					</div>
					<ProfileModal title="Academic Info" />

					<div className="grid-col2">
						<div className="profile-userdata">
							<div className="label">My Current Grade</div>
							<div className="databox">Grade prop</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Available For Remote Sessions</div>
							<div className="databox">online Boolean prop</div>
						</div>
					</div>
				</div>

				<div className="profile-card">
					<div className="headline">
						<h5>Subjects I Want To Learn</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#exampleModal" type="button" />
					</div>
					<ProfileModal title="Subjects to Learn" />

					<div className="grid-col3">
						<div className="profile-userdata">
							<div className="label">First Subject</div>
							<div className="databox">Subject prop</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Second Subject</div>
							<div className="databox">Subject prop</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Third Subject</div>
							<div className="databox">Subject prop</div>
						</div>
					</div>
				</div>

				<div className="profile-card">
					<div className="headline">
						<h5>My Availability</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#exampleModal" type="button" />
					</div>
					<ProfileModal title="My Availability" />

					<div className="grid-col1">
						<Weeklyavailability />
					</div>
				</div>
			</div>
		</div>
	);
};
