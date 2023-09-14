import React from "react";
import "./ChatWindow.css";

export const ChatWindow = (props) => {
  return <div className="window">{props.children}</div>;
};
