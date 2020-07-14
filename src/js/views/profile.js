import React from "react";
import PropTypes from "prop-types";

export const Profile = props => {
	return (
		<div>
			<h1>{props.name}</h1>
			<div className="card" style={{ width: "18rem", backgroundColor: "black" }}>
				<div className="card-body">
					<h5 className="card-title">Special title treatment</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

// At the end. here would have a prop validation if we are using it
Profile.propTypes = {
	name: PropTypes.string
};
