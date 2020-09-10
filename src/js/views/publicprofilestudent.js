import React, { useState, useContext } from "react";
import "../../styles/profile.scss";
import PropTypes from "prop-types";
import { Profileheader } from "../component/profileheader";
import { Context } from "../store/appContext.js";

export const Publicprofilestudent = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Profileheader
				id="send-message-button"
				usertype={store.currentUser.student != null && store.currentUser.student === true ? "Student" : "Tutor"}
				name={store.currentUser.name}
			/>
			<div className="grid-container fix-footer">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
					</div>
					<p>{store.currentUser.userprofile.about_me}</p>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Academic Info</h5>
					</div>

					<div className="grid-col2">
						<div className="profile-userdata">
							<div className="label">My Current Grade</div>
							<div className="databox">College / Higher Ed</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Available For Remote Sessions</div>
							<div className="databox">Online Only</div>
						</div>
					</div>
				</div>
				<div className="profile-card">
					<div className="headline">
						<h5>Subjects I Want To Learn</h5>
					</div>

					<div className="grid-col3">
						<div className="profile-userdata">
							<div className="label">First Subject</div>
							<div className="databox">Writing</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Second Subject</div>
							<div className="databox">Math</div>
						</div>
						<div className="profile-userdata">
							<div className="label">Third Subject</div>
							<div className="databox">Language Arts</div>
						</div>
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
