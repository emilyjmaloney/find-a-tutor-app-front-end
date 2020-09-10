import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/findatutor_logo_white.png";

export const Newnavbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark blurple-nav">
			<Link to="/homepage">
				<a className="navbar-brand" href="#">
					<img className="icon" src={logo} />
					Find A Tutor!
				</a>
			</Link>
			<ul className="navbar-nav flex-row ml-auto">
				{/* <li className="nav-item mx-1">
					<Link to="/homepage">
						<button className="btn btn-dark my-2 my-sm-0">Homepage</button>
					</Link>
				</li> */}
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link className="btn btn-outline-light my-2 my-sm-0 blurple-btn" to="/account">
							Account
						</Link>
					) : null}
				</li>
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link className="btn btn-outline-light my-2 my-sm-0 blurple-btn" to="/profile">
							Profile
						</Link>
					) : null}
				</li>
				<li className="nav-item mx-1">
					{store.token != null ? (
						<Link to="/messages">
							<button className="btn btn-outline-light my-2 my-sm-0 blurple-btn">Message</button>
						</Link>
					) : null}
				</li>
				<li className="nav-item mx-1">
					<Link to="/search">
						<button className="btn btn-outline-light my-2 my-sm-0 blurple-btn">Search</button>
					</Link>
				</li>
			</ul>

			{/* Login/logout button that Paolo had in the example from class: */}
			<nav className="navbar navbar-dark blurple my-2 my-sm-0">
				<Link to="/">
					<span className="navbar-brand" />
				</Link>
				<div className="ml-auto">
					{store.token != null ? (
						<Link to="/homepage">
							<button onClick={() => actions.logout()} className="btn btn-outline-light blurple-btn">
								Logout
							</button>
						</Link>
					) : (
						<Link to="/homepage">
							<button className="btn btn-outline-light blurple-btn">Login</button>
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
