import React from "react";
import "../../styles/messages.scss";

export const Inboxitem = () => {
	return (
		<div className="inbox-card">
			<div className="messages-user-photo inbox-photo" />
			<div>
				<div className="messages-title inbox-title">name prop</div>
				<div className="messages-datetime">created_at prop</div>
			</div>
		</div>
	);
};
// Inboxitem.propTypes = {
// 	title: PropTypes.string,
// 	id: PropTypes.string,
// 	name: PropTypes.string,
// 	created_at: PropTypes.string
// };
