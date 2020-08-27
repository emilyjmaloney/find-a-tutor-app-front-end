import React from "react";
import "../../styles/messages.scss";

export const Inboxitem = () => {
	return (
		<div className="inbox-card">
			<div className="messages-user-photo inbox-photo" />
			<div>
				<div className="messages-title inbox-title">Sarah Machicado</div>
				<div className="messages-datetime">Received Time</div>
			</div>
		</div>
	);
};
