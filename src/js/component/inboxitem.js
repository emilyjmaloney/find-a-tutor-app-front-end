import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/messages.scss";
import { Context } from "../store/appContext";
import userDefault from "../../img/userdefault.png";

export const Inboxitem = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="inbox-card">
			<img className="messages-user-photo inbox-photo" src={userDefault} />
			<div onClick={() => actions.currentRecipient(props.id)}>
				<div className="messages-title inbox-title">{props.name}</div>
				{/* <div className="messages-datetime">Last Message sent Date</div> */}
			</div>
		</div>
	);
};
Inboxitem.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	created_at: PropTypes.string
};
