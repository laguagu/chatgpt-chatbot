/* eslint-disable */
import { ChangeEvent, FormEvent, useState } from "react";
import { Message } from "./types/chatTypes";
import clsx from "clsx";
import chatbotApi from "./api/chatbotApi";

function Chatbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
    ]);

    try {
      // Hae chatbotin vastaus
      const botResponse = await chatbotApi(userInput);
      
      // Lisää chatbotin vastaus viesti taulukkoon
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Failed to get chatbot response");
    }

    setUserInput("");

  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 p-4">
      <div className="flex-1 overflow-y-auto ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={clsx("text-2xl items-center flex bg-slate-500", {
              "text-red-500": message.sender === "user",
              "text-green-500 justify-end": message.sender === "bot",
            })}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={userInput}
          className="flex-1 border-2 p-2 rounded-md"
          placeholder="Type your message..."
          onChange={handeInputChange}
        />
        <button
          type="submit"
          className="p-2 ml-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbox;
