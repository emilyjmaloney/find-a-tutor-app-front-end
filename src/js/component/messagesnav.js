import React, { useContext, useEffect } from "react";
import "../../styles/messages.scss";
import { Inboxitem } from "../component/inboxitem";
import { Context } from "../store/appContext";

export const Messagesnav = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="sidenav-boxshadow">
			<div className="section-title inbox">Inbox</div>
			<div className="sidenav-container">
				<div className="messages-grid">
					{store.token != null
						? store.currentUser.received_messages.map((item, index) => {
								var user = store.allUsers.find(recipient => recipient.id == item.sender_id);
								console.log("USER:", user);
								return <Inboxitem name={user.name} id={user.id} key={index} />;
						  })
						: "Loading..."}
				</div>
			</div>
		</div>
	);
};
