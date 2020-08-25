import React, { useState } from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";
import { Profileheader } from "../component/profileheader";
import { Profilenav } from "../component/profilenav";
import { Adminstudent } from "./adminstudent";
import { Useraccount } from "./useraccount";

export function Account(props) {
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
			<Profileheader id="update-photo-button" usertype="Student" />
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
			{view === "admin" && <Adminstudent />}
			{view === "user" && <Useraccount />}
		</div>
	);
}
