import React from "react";
import { Link } from "react-router-dom";

export function Newnavbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Find A Tutor!
			</a>

			<ul className="navbar-nav flex-row">
				<li className="nav-item mx-1">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item mx-1">
					<a className="nav-link" href="#">
						Search
					</a>
				</li>
				<li className="nav-item mx-1">
					<a className="nav-link" href="#">
						Inbox
					</a>
				</li>

				<li className="nav-item mx-1">
					<Link to="/profile">
						<button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link className="nav-link" to="/profile">
						Profile
					</Link>
				</li>
			</ul>
			<form className="form-inline my-2 my-lg-0">
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Inbox
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Profile
				</button>
			</form>
		</nav>
	);
}
