import React from "react";
import "../../styles/messages.scss";
import { Chatmessageitem } from "../component/chatmessageitem";

export const Chatmessage = () => {
	return (
		<div>
			<div className="section-title chat">Chat with User</div>
			<div className="chat-container">
				<div className="chat-grid">
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
					<Chatmessageitem />
				</div>
				<div className="input-message-grid">
					<form>
						<div className="form-group">
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="4" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
