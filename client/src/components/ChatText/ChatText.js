import React from "react";
import "./ChatText.css";

export const ChatText = ({ message }) => {
  return (
    <div>
      <div
        className={`text ${
          message.from === "me" ? "me-background" : "chatbot-background"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};
