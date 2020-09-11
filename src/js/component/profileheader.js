import React from "react";
import PropTypes from "prop-types";
import "../../styles/profile.scss";
import { ProfileModal } from "../component/profilemodal";
// import { Image } from "cloudinary-react";

export const Profileheader = props => {
	return (
		<div className="default-cover-image">
			<div className="profile-header">
				<div className="profile-pic">{/* <Image cloudName="sarah" publicId="divampp9m" /> */}</div>
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
