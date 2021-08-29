import React from "react";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import SendMessage from "./SendMessage";

const Messages = () => {
	const msgs = [1, 2, 3, 4, 5];

	return (
		<div className="mesgs">
			{/* <!-- Historia inicio --> */}
			<div className="msg_history">
				{/* <IncomingMessage />

				<OutgoingMessage /> */}

				{msgs.map((msg) =>
					msg % 2 ? (
						<IncomingMessage key={msg} />
					) : (
						<OutgoingMessage key={msg} />
					)
				)}
			</div>
			{/* <!-- Historia Fin --> */}

			<SendMessage />
		</div>
	);
};

export default Messages;
