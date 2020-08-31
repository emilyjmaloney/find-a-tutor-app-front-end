import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Newnavbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<Link to="/homepage">
				<a className="navbar-brand" href="#">
					Find A Tutor!
				</a>
			</Link>
			<ul className="navbar-nav flex-row ml-auto">
				<li className="nav-item mx-1">
					<Link to="/homepage">
						<button className="btn btn-dark my-2 my-sm-0">Homepage</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link to="/searchstudentsheader">
						<button className="btn btn-dark my-2 my-sm-0">Search</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link className="btn btn-dark my-2 my-sm-0" to="/account">
						Profile
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link to="/messages">
						<button className="btn btn-dark my-2 my-sm-0">Message</button>
					</Link>
				</li>
			</ul>

			{/* Login/logout button that Paolo had in the example from class: */}
			<nav className="navbar navbar-dark bg-dark my-2 my-sm-0">
				<Link to="/">
					<span className="navbar-brand" />
				</Link>
				<div className="ml-auto">
					{store.token != null ? (
						<button onClick={() => actions.logout()} className="btn btn-light">
							Logout
						</button>
					) : (
						<Link to="/homepage">
							<button className="btn btn-dark">Login</button>
						</Link>
					)}
				</div>
			</nav>
		</nav>
	);
};

// CODE FROM NAVBAR
// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Check the Context in action</button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };
