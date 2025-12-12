/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Can yo get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is December 7th",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
