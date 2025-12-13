/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "hello chatbot",
        sender: "user",
        id: "id1",
        time: "10:30",
      },
      {
        message: "Hello! How can I help you?",
        sender: "robot",
        id: "id2",
        time: "10:31",
      },
      {
        message: "Can yo get me todays date?",
        sender: "user",
        id: "id3",
        time: "10:32",
      },
      {
        message: "Today is December 7th",
        sender: "robot",
        id: "id4",
        time: "10:33",
      },
    ]
  );
  useEffect(() => {
    Chatbot.addResponses({
      "What is your name? ": "I am Chatbot, your virtual assistant.",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
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
