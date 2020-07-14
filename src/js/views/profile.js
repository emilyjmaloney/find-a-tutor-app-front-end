import React from "react";
import PropTypes from "prop-types";

export const Profile = props => (
	<div>
		<h1>{props.name}</h1>
	</div>
);

// At the end. here would have a prop validation if we are using it
Profile.propTypes = {
	name: PropTypes.string
};
