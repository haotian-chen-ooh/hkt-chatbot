import React, { useRef, useEffect } from "react";
import "./ChatWindow.css";

export const ChatWindow = (props) => {
  const bottomRef = useRef();
  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.children.length]);
  return (
    <div className="window">
      {props.children}
      <div ref={bottomRef} />
    </div>
  );
};
