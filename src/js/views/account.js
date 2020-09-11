import React, { useState, useContext } from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";
import { Profileheader } from "../component/profileheader";
import { Profilenav } from "../component/profilenav";
import { Adminstudent } from "./adminstudent";
import { Useraccount } from "./useraccount";
import { Context } from "../store/appContext.js";
import { Admintutor } from "../views/admintutor";

export function Account(props) {
	const { store, actions } = useContext(Context);
	const [view, setView] = useState("admin");
	let profileSelected = "";
	let accountSelected = "";
	if (view === "admin") {
		profileSelected = "nav-selected";
	} else if (view === "user") {
		accountSelected = "nav-selected";
	}
	return (
		<div>
			<Profileheader
				id="update-photo-button"
				usertype={store.currentUser.student != null && store.currentUser.student === true ? "Student" : "Tutor"}
				name={store.currentUser.name}
			/>
			{/* below is profile nav */}
			<div className="grid-container">
				<div className="second-nav">
					<div
						onClick={() => {
							setView("admin");
						}}
						className={`second-nav-link ${profileSelected}`}>
						Profile
					</div>
					<div
						onClick={() => {
							setView("user");
						}}
						className={`second-nav-link ${accountSelected}`}>
						Account Settings
					</div>
				</div>
			</div>
			{view === "admin" ? store.currentUser.student == true ? <Adminstudent /> : <Admintutor /> : null}
			{view === "user" && <Useraccount />}
		</div>
	);
}