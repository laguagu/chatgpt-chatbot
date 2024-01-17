/* eslint-disable */
import { ChangeEvent, FormEvent, useState } from "react";

interface Message {
  text: string,
  sender: "user" | "bot";
}

function Chatbox() {
  const [message, setMessage] = useState<Message[]>([]);
  const [input, setUserInput] = useState<string>("");

  const handeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <div className="flex flex-col h-screen bg-gray-200 p-4">
      <div className="flex-1 overflow-y-auto ">
        <p>aasd</p>
      </div>
      <form className="flex items-center">
        <input
          type="text"
          className="flex-1 border-2 p-2 rounded-md"
          placeholder="Type your message..."
          onChange={() => {}}
        />
        <button className="p-2 ml-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbox;
