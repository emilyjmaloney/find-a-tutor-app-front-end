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
					<Link to="/search">
						<button className="btn btn-dark my-2 my-sm-0">Search</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link className="btn btn-dark my-2 my-sm-0" to="/account">
							Account
						</Link>
					) : null}
				</li>
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link className="btn btn-dark my-2 my-sm-0" to="/profile">
							Profile
						</Link>
					) : null}
				</li>
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link to="/messages">
							<button className="btn btn-dark my-2 my-sm-0">Message</button>
						</Link>
					) : null}
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
						<button className="btn btn-dark">Login</button>
					)}
				</div>
			</nav>
		</nav>
	);
};

{
	/* <form className="form-inline my-2 my-lg-0">
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Searching
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Inboxing
				</button>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Profileing
				</button>
			</form> */
}

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
