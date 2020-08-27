import React from "react";
import "../../styles/messages.scss";
import { Messagesnav } from "../component/messagesnav";
import { Chatmessage } from "../views/chatmessage";

export const Messages = () => {
	return (
		<div className="grid-messages-layout">
			<Messagesnav />
			<Chatmessage />
		</div>
	);
};
