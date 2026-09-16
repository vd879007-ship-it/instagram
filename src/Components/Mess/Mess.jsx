import React, { useState } from "react";
import { FaInstagram, FaEdit, FaSearch, FaChevronRight, FaPaperPlane } from "react-icons/fa";
import "./Mess.css";

const notesData = [
  { id: 1, type: "yournote", label: "Your note", img: "/profile .jpg" },
  { id: 2, name: "Dharshu.🚀", note: "Yeya En Ko...\nSundar Naraya...", img: "/mess 6.jpg" },
  { id: 3, name: "Nandhini", note: "Untold Story\nAnirudh Ravic...", img: "/Sug 2.jpg" },
  { id: 4, name: "😈✨", note: "Radhi\nSai Abhya", img: "/boy 4.jpg" },
  { id: 5, name: "Ariveyy💞", note: "Untold Story\nAnirudh Ravic...", img: "/mess 1.jpg" },
  { id: 6, name: "☆ LOKI ☆", note: "Untold Story\nAnirudh Ravic...", img: "/mess 3.jpg" },
  { id: 7, name: "EL Dorado", note: "Untold Story\nAnirudh Ravic...", img: "/mess 4.jpg" },
];

const chatsData = [
  {
    id: 1,
    name: "Ariveyy💞",
    lastMsg: "Ariveyy💞 sent an attachment.",
    time: "54m",
    img: "/mess 1.jpg",
    unread: true,
    bold: true,
  },
  {
    id: 2,
    name: "Dharshu.🚀",
    lastMsg: "Dharshu.🚀 sent an attachment.",
    time: "4h",
    img: "/mess 6.jpg",
    unread: true,
    bold: true,
  },
  {
    id: 3,
    name: "Vinorithika",
    lastMsg: "Vanakam",
    time: "9h",
    img: "/girl 4.jpg",
    unread: true,
    bold: false,
  },
  {
    id: 4,
    name: "SUBI",
    lastMsg: "subi sent an attachment.",
    time: "15h",
    img: "/girl 3.jpg",
    unread: false,
    bold: false,
  },
  {
    id: 5,
    name: "Jothi Sudha",
    lastMsg: "Jothi sent an attachment.",
    time: "16h",
    img: "/mess 4.jpg",
    unread: true,
    bold: true,
  },
  {
    id: 6,
    name: "Sudhar Sanan B",
    lastMsg: "Reacted 😍 to your message",
    time: "17h",
    img: "/mess 2.jpg",
    unread: false,
    bold: false,
  },
  {
    id: 7,
    name: "☆ LOKI ☆",
    lastMsg: "Reacted 😍 to your message",
    time: "17h",
    img: "/mess 3.jpg",
    unread: false,
    bold: false,
  },
  {
    id: 8,
    name: "Jothi Sudha",
    lastMsg: "Reacted 😍 to your message",
    time: "17h",
    img: "/mess 5.jpg",
    unread: false,
    bold: false,
  },
];

const Messages = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="messages-page">
      {/* LEFT: chat list */}
      <div className="messages-sidebar">
        <div className="messages-topbar">
          <FaInstagram className="ig-logo" />
        </div>

        <div className="messages-header">
          <div className="messages-username">
            sai_87746 <span className="dropdown-arrow">▾</span>
          </div>
          <FaEdit className="new-msg-icon" />
        </div>

        <div className="messages-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        {/* Notes / stories row */}
        <div className="notes-row">
          {notesData.map((note) => (
            <div className="note-item" key={note.id}>
              {note.type === "yournote" ? (
                <>
                  <div className="note-bubble">First note in a while...</div>
                  <img src={note.img} alt="your note" className="note-img" />
                  <span className="note-label">Your note</span>
                </>
              ) : (
                <>
                  <div className="note-bubble">{note.note}</div>
                  <img src={note.img} alt={note.name} className="note-img" />
                  <span className="note-label">{note.name}</span>
                </>
              )}
            </div>
          ))}
          <div className="note-arrow">
            <FaChevronRight />
          </div>
        </div>

        {/* Tabs */}
        <div className="messages-tabs">
          <span
            className={activeTab === "messages" ? "tab active" : "tab"}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </span>
          <span
            className={activeTab === "requests" ? "tab active" : "tab"}
            onClick={() => setActiveTab("requests")}
          >
            Requests
          </span>
        </div>

        {/* Chat list */}
        <div className="chat-list">
          {chatsData.map((chat) => (
            <div
              className={`chat-item ${selectedChat === chat.id ? "chat-item-active" : ""}`}
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
            >
              <img src={chat.img} alt={chat.name} className="chat-img" />
              <div className="chat-info">
                <span className={chat.bold ? "chat-name bold" : "chat-name"}>
                  {chat.name}
                </span>
                <span className={chat.bold ? "chat-last-msg bold" : "chat-last-msg"}>
                  {chat.lastMsg} · {chat.time}
                </span>
              </div>
              {chat.unread && <span className="unread-dot"></span>}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: empty state / chat window */}
      <div className="messages-main">
        {!selectedChat ? (
          <div className="empty-messages">
            <div className="send-circle">
              <FaPaperPlane className="send-icon" />
            </div>
            <h3>Your messages</h3>
            <p>Send a message to start a chat.</p>
            <button className="send-msg-btn">Send message</button>
          </div>
        ) : (
          <div className="chat-window">
            <p>Chat with {chatsData.find((c) => c.id === selectedChat)?.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
