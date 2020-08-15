import React from "react";
import { Link } from "react-router-dom";

export function Newnavbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<Link to="/homepage">
				<a className="navbar-brand" href="#">
					Find A Tutor!
				</a>
			</Link>
			{/* <form className="form-inline my-2 my-lg-0">
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Searching
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Inboxing
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Profileing
				</button>
			</form> */}
			<ul className="navbar-nav flex-row ml-auto">
				<li className="nav-item mx-1">
					<Link to="/homepage">
						<button className="btn btn-dark my-2 my-sm-0">Homepage</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
<<<<<<< HEAD
					<a className="nav-link" href="#">
						Inbox
					</a>
				</li>

				<li className="nav-item mx-1">
					<Link to="/account">
						<button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link className="nav-link" to="/account">
=======
					<Link to="/profile">
						<button className="btn btn-dark my-2 my-sm-0">Search</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link className="btn btn-dark my-2 my-sm-0" to="/profile">
>>>>>>> ea33aa83fb5fea4004a030ce9209a71058fdefde
						Profile
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link to="/profile">
						<button className="btn btn-dark my-2 my-sm-0">Message</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
