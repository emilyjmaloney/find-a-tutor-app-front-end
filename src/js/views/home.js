import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>No Rigo!</h1>
		<p>
			<img />
		</p>
		<Link to="/admintutor">
			<a href="#" className="btn btn-success">
				If you see this green button, click on it!
			</a>
		</Link>
	</div>
);
