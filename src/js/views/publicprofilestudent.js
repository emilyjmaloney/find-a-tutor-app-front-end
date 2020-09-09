import React, { useState, useContext } from "react";
import "../../styles/profile.scss";
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
