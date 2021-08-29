import React from "react";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import "../css/chat.css";

const ChatPage = () => {
	return (
		<div className="messaging">
			<div className="inbox_msg">
				<InboxPeople />

				<Messages />
			</div>
		</div>
	);
};

export default ChatPage;
