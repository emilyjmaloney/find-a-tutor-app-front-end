import React from "react";
import "../../styles/messages.scss";
import { Inboxitem } from "../component/inboxitem";

export const Messagesnav = () => {
	return (
		<div className="sidenav-boxshadow">
			<div className="section-title inbox">Inbox</div>
			<div className="sidenav-container">
				<div className="messages-grid">
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
					<Inboxitem />
				</div>
			</div>
		</div>
	);
};
