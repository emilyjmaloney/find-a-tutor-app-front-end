import React from "react";
import "../../styles/profile.scss";
import PropTypes from "prop-types";
import { ProfileModal } from "../component/profilemodal";
import { Weeklyavailability } from "../component/weeklyavailability";

export const Admintutor = props => {
	return (
		<div>
			<div className="grid-container fix-footer">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#about-me-modal" type="button" />
					</div>
					<ProfileModal title="About Me" id="about-me-modal" />
					<div>
						<p>About Me</p>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Experience Info</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#experience-modal" type="button" />
					</div>
					<ProfileModal title="Experience Info" id="experience-modal" />

					<div className="grid-col2">
						<div>
							<p>Experience</p>
						</div>
						<div className="profile-userdata">
							<div className="label">Available For Remote Sessions</div>
							<div className="databox">Online</div>
						</div>
					</div>
				</div>

				<div className="profile-card">
					<div className="headline">
						<h5>Subjects That I Teach</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#subjects-modal" type="button" />
					</div>
					<ProfileModal title="Subjects That I Teach" id="subjects-modal" />

					<div className="grid-col3">
						<div className="profile-userdata">
							<div className="label">First Subject</div>
							<div className="databox">Subject 1</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Second Subject</div>
							<div className="databox">Subject 2</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Third Subject</div>
							<div className="databox">Subject 3</div>
						</div>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>My Availability</h5>
						<i className="fas fa-pen" data-toggle="modal" data-target="#availability-modal" type="button" />
					</div>
					<ProfileModal title="My Availability" id="availability-modal" />

					<div className="grid-col1">
						<Weeklyavailability />
					</div>
				</div>
			</div>
		</div>
	);
};
// Admintutor.propTypes = {
// 	aboutMe: PropTypes.string,
// 	experience: PropTypes.string,
// 	online: PropTypes.string,
// 	subjects: PropTypes.string
// };
