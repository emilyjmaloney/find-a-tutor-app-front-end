import React from "react";
import PropTypes from "prop-types";
import "../../styles/profile.scss";
import { ProfileModal } from "../component/profilemodal";
<<<<<<< HEAD
// import { Image } from "cloudinary-react";
=======
import userDefault from "../../img/userdefault.png";
>>>>>>> 5885b5ebf945d1e69f51f9476ea7c8920174e57d

export const Profileheader = props => {
	return (
		<div className="default-cover-image">
			<div className="profile-header">
				<img className="profile-pic" src={userDefault} />
				<div>
					<h3>{props.name}</h3>
					<div className="subtext">{props.usertype}</div>
					{props.id === "update-photo-button" && (
						<div className="button" data-toggle="modal" data-target="#update-photo-modal" type="button">
							Update Photo
						</div>
					)}
					{props.id === "send-message-button" && (
						<div className="button" data-toggle="modal" data-target="#send-message-modal" type="button">
							Send a Message
						</div>
					)}
				</div>
			</div>
			<ProfileModal title="Upload Profile Photo" id="update-photo-modal" />
			<ProfileModal title="Send a Message" id="send-message-modal" />
		</div>
	);
};
Profileheader.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	usertype: PropTypes.string,
	name: PropTypes.string
};
