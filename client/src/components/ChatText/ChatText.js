import React from "react";

export const ChatText = ({ message }) => {
  return (
    <div>
      <span>{message.from + " " + message.text}</span>
    </div>
  );
};
