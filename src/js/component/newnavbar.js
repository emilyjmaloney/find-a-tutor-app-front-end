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
					<Link to="/profile">
						<button className="btn btn-dark my-2 my-sm-0">Search</button>
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link className="btn btn-dark my-2 my-sm-0" to="/account">
						Profile
					</Link>
				</li>
				<li className="nav-item mx-1">
					<Link to="/profile">
						<button className="btn btn-dark my-2 my-sm-0">Message</button>
					</Link>
				</li>
			</ul>
			<nav className="navbar navbar-dark bg-dark my-2 my-sm-0">
				<Link to="/">
					<span className="navbar-brand" />
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
					{store.token != null ? (
						<button onClick={() => actions.logout()} className="btn btn-light">
							Logout
						</button>
					) : (
						<button className="btn btn-dark">Login</button>
					)}
					{/* </Link> */}
				</div>
			</nav>
		</nav>
	);
};
