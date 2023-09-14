import React, { useState } from "react";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { Header } from "./components/Header/Header";
import { ChatText } from "./components/ChatText/ChatText";
import { ChatInput } from "./components/ChatInput/ChatInput";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <Header />
      <ChatWindow>
        {messages.map((message, index) => (
          <ChatText key={index} message={message} />
        ))}
      </ChatWindow>
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
