import React, { useContext, useState, useEffect } from "react";
import "../../styles/messages.scss";
import { Chatmessageitem } from "../component/chatmessageitem";
import { Context } from "../store/appContext";

export const Chatmessage = () => {
	const { store, actions } = useContext(Context);
	const [allMessages, setAllMessages] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(
		() => {
			const mergeMessages = async () => {
				var tempArray = [];
				tempArray = [...store.currentUser.received_messages, ...store.currentUser.sent_messages];
				setAllMessages(tempArray);
			};
			mergeMessages();
		},
		[store.currentUser]
	);
	return (
		<div>
			<div className="section-title chat">Chat with Emily Maloney</div>
			<div className="chat-container">
				<div className="chat-grid">
					{store.token != null &&
						// store.currentUser.received_messages.map((message, index) => {
						allMessages.map((message, index) => {
							console.log("-----", message);
							return (
								<>
									{store.currentUser.id == message.sender_id ? (
										<Chatmessageitem
											class="alert alert-primary"
											recipient_id={message.sender_id}
											text={message.text}
											name={message.name}
											created_at={message.created_at}
											key={index}
										/>
									) : (
										<Chatmessageitem
											class="alert alert-success"
											recipient_id={message.sender_id}
											text={message.text}
											name={message.name}
											created_at={message.created_at}
											key={index}
										/>
									)}
								</>
							);
						})}
				</div>
				<div className="input-message-grid">
					<div className="input-message">
						<form>
							<div className="form-group">
								<textarea
									onChange={e => setMessage(e.target.value)}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="1"
								/>
							</div>
						</form>
					</div>
					<div className="message-button">
						<i
							onClick={() => actions.sendAMessage(message, store.currentRecipient)}
							className="fas fa-paper-plane fa-lg icon-white"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
