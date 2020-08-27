import React from "react";
import "../../styles/messages.scss";

export const Chatmessageitem = () => {
	return (
		<div className="text-message">
			<div className="text-message-headline">
				<div className="messages-user-photo chat-photo" />
				<div className="messages-title chat-title">Sarah Machicado</div>
				<div className="messages-datetime">Received Time</div>
			</div>
			<div className="text-message-body">
				{
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Vel pharetra vel turpis nunc eget lorem dolor. A diam sollicitudin tempor id eu nisl nunc mi. Elementum eu facilisis sed odio morbi quis. Sem integer vitae justo eget magna fermentum iaculis. Scelerisque varius morbi enim nunc faucibus. Quisque non tellus orci ac auctor. Posuere ac ut consequat semper viverra nam libero. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Magna fermentum iaculis eu non diam phasellus vestibulum."
				}
			</div>
		</div>
	);
};
