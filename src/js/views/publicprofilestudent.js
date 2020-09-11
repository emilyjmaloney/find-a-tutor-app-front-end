import React, { useState, useContext } from "react";
import "../../styles/profile.scss";
import PropTypes from "prop-types";
import { Profileheader } from "../component/profileheader";
import { Context } from "../store/appContext.js";
import { Link, useParams } from "react-router-dom";
import { Weeklyavailability } from "../component/weeklyavailability";

export const Publicprofilestudent = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const selectedUser = store.allUsers.find(item => item.id == params.theid);
	console.log(selectedUser);
	return (
		<div>
			<Profileheader
				id="send-message-button"
				// usertype={store.currentUser.student != null && store.currentUser.student === true ? "Student" : "Tutor"}
				name={selectedUser.name}
				usertype={selectedUser.student === true ? "Student" : "Tutor"}
			/>
			<div className="grid-container fix-footer">
				<div className="profile-card">
					<div className="headline">
						<h5>About me</h5>
					</div>
<<<<<<< HEAD
					<p>Hello! I am from California. I am interested in Science and Math</p>
=======
					<p>{selectedUser.userprofile.about_me}</p>
>>>>>>> d127894e9742d693398b36ba9a05c0ae9332bf1c
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
                    <div className="grid-col1">
						<Weeklyavailability />
					</div>
				</div>
			</div>
		</div>
	);
};
