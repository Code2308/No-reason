// src/components/Chatbot.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! 👋 Ada yang bisa saya bantu tentang budaya Nusantara?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulasi respon bot (nanti bisa dihubungkan ke database)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Menarik! Nanti aku bantu carikan informasinya 😄" },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Tombol Chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50"
      >
        {isOpen ? <X size={24}/> : <MessageCircle size={28}/>}
      </button>

      {/* Popup Chatbot */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white w-80 sm:w-96 h-96 rounded-2xl shadow-lg flex flex-col overflow-hidden z-50">
          <div className="bg-teal-700 text-white py-3 px-4 font-semibold">
            💬 BudayaBot
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "bot"
                    ? "bg-teal-100 text-teal-900 self-start"
                    : "bg-yellow-300 text-teal-900 self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 p-2 outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-teal-600 text-white px-4 hover:bg-teal-700 transition-all"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
