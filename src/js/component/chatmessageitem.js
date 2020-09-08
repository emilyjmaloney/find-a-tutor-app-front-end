import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/messages.scss";
import { Context } from "../store/appContext";

export const Chatmessageitem = props => {
	const { store, actions } = useContext(Context);

	function findName() {
		const user = store.allUsers.find(item => item.id == props.recipient_id);

		return user.name;
	}
	return (
		<div className="text-message">
			<div className="text-message-headline">
				<div className="messages-user-photo chat-photo" />
				<div className="messages-title chat-title">{findName()}</div>
				<div className="messages-datetime">{props.created_at}</div>
			</div>
			<div className="text-message-body">{props.text}</div>
		</div>
	);
};
Chatmessageitem.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	recipient_id: PropTypes.number,
	created_at: PropTypes.string,
	text: PropTypes.string
};
