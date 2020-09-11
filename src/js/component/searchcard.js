import React from "react";
import "../../styles/profile.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import userDefault from "../../img/userdefault.png";

export const Searchcard = ({ user }) => {
	return (
		<div className="profile-card searchstyles">
			<div className="searchcard-grid">
				<div className="photo-center">
					<img className="search-profile-photo" src={userDefault} />
				</div>
				<div>
					<h4>{user.name}</h4>
					<div className="search-usertype">{user.student ? "student" : "tutor"}</div>
					<div>{user.student && user.grade}</div>
				</div>
				<div>
					{/* <div className="line-with-icon">
						<i className="fas fa-map-marker-alt" />
						<div>Miles Away Prop</div>
					</div> */}
					<div className="line-with-icon">
						<i className="fas fa-check" />
						<div>
							{user.online == "option1"
								? "In-Person or Online"
								: user.online == "option2"
									? "In-Person Only"
									: "Online Only"}
						</div>
					</div>
				</div>
				<Link to={`/public-profile/${user.user_id}`}>
					<div className="button">View Profile</div>
				</Link>
			</div>
		</div>
	);
};

Searchcard.propTypes = { user: PropTypes.object };
