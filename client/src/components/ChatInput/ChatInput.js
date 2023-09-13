import React, { useState, useEffect } from "react";
import axios from "axios";

const chatEndpoint = "http://localhost:4000/chat";

export const ChatInput = ({ messages, setMessages }) => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (query !== null) {
      const getAnswer = async () => {
        try {
          const res = await axios({
            method: "POST",
            url: chatEndpoint,
            headers: {
              "content-type": "application/json",
            },
            data: {
              query: query,
            },
          });
          setMessages([
            ...messages,
            { from: "chatbot", text: res.data.message },
          ]);
          setQuery(null);
        } catch (error) {
          console.log(error);
        }
      };
      getAnswer();
    }
  }, [query]);

  const onSend = async () => {
    setMessages([...messages, { from: "me", text }]);
    setQuery(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(t) => setText(t.target.value)}
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
};
