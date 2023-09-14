import React from "react";
import ReactMarkdown from "react-markdown";
import "./ChatText.css";

export const ChatText = ({ message }) => {
  return (
    <div
      className={`text-container ${
        message.from === "me"
          ? "text-container-right-align"
          : "text-container-left-align"
      }`}
    >
      <div
        className={`text ${
          message.from === "me" ? "me-background" : "chatbot-background"
        }`}
      >
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>
    </div>
  );
};
