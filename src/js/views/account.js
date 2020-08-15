import React, { useState } from "react";
import "../../styles/profile.scss";
import { Link } from "react-router-dom";
import { Profileheader } from "../component/profileheader";
import { Profilenav } from "../component/profilenav";
import { Adminstudent } from "./adminstudent";
import { Useraccount } from "./useraccount";
export function Account(props) {
	const [view, setView] = useState("admin");
	return (
		<div>
			<Profileheader />
			{/* <Profilenav /> */}
			<div className="grid-container">
				<div className="second-nav">
					<div onClick={() => setView("admin")} className="second-nav-link">
						Profile
					</div>
					<div onClick={() => setView("user")} className="second-nav-link">
						Account Settings
					</div>
				</div>
			</div>
			{view === "admin" && <Adminstudent />}
			{view === "user" && <Useraccount />}
		</div>
	);
}
