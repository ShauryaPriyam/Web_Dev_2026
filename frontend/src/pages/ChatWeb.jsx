import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import socket from "../Socket";
import "./chat.css";

function ChatWeb() {
  const { id } = useParams();
  const currentUser = localStorage.getItem("profileName") || "me";

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState("");
  const [menuIndex, setMenuIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const bottomRef = useRef(null);

  // 🔥 SAFE PARSE
  const getAllChats = () => {
    try {
      const data = JSON.parse(localStorage.getItem("messages"));
      return typeof data === "object" && data !== null ? data : {};
    } catch {
      return {};
    }
  };

  const chatKey = [currentUser, id].sort().join("_");

  // ✅ JOIN ROOM
  useEffect(() => {
    socket.emit("join_room", {
      user1: currentUser,
      user2: id,
    });
  }, [id]);

  // ✅ LOAD + MARK SEEN
  useEffect(() => {
    const allChats = getAllChats();
    const chat = Array.isArray(allChats[chatKey]) ? allChats[chatKey] : [];

    const updated = chat.map((msg) => {
      if (msg.receiver === currentUser && msg.status !== "seen") {
        return { ...msg, status: "seen" };
      }
      return msg;
    });

    setMessages(updated);
    allChats[chatKey] = updated;
    localStorage.setItem("messages", JSON.stringify(allChats));
  }, [id]);

  // ✅ SAVE
  const saveMessages = (updated) => {
    const allChats = getAllChats();
    allChats[chatKey] = updated;
    localStorage.setItem("messages", JSON.stringify(allChats));
  };

  // ✅ RECEIVE
  useEffect(() => {
    socket.on("receive_message", (data) => {
      const newMsg = { ...data, status: "delivered" };

      setMessages((prev) => {
        // جلوگیری از دابل شدن
        const exists = prev.find(
          (m) =>
            m.text === newMsg.text &&
            m.time === newMsg.time &&
            m.sender === newMsg.sender
        );
        if (exists) return prev;

        const updated = [...prev, newMsg];
        saveMessages(updated);
        return updated;
      });
    });

    socket.on("typing", (sender) => {
      if (sender !== currentUser) {
        setTyping(`${sender} is typing...`);
      }
    });

    socket.on("stop_typing", () => setTyping(""));

    return () => {
      socket.off("receive_message");
      socket.off("typing");
      socket.off("stop_typing");
    };
  }, []);

  // ✅ AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ SEND
  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      sender: currentUser,
      receiver: id,
      text: message,
      time: new Date().toLocaleTimeString(),
      status: "sent",
    };

    socket.emit("send_message", msgData);

    const updated = [...messages, msgData];
    setMessages(updated);
    saveMessages(updated);

    setMessage("");

    socket.emit("stop_typing", {
      sender: currentUser,
      receiver: id,
    });
  };

  // ✅ ENTER
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else {
      socket.emit("typing", currentUser);
    }
  };

  // ✅ CLOSE MENU
  useEffect(() => {
    const closeMenu = () => setMenuIndex(null);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  // ✅ COPY
  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    setMenuIndex(null);
  };

  // ✅ DELETE
  const deleteMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    saveMessages(updated);
    setMenuIndex(null);
  };

  // ✅ EDIT
  const editMessage = (index) => {
    setEditingIndex(index);
    setMenuIndex(null);
  };

  const saveEdit = (index, newText) => {
    if (!newText.trim()) return;

    const updated = [...messages];
    updated[index].text = newText;

    setMessages(updated);
    saveMessages(updated);
    setEditingIndex(null);
  };

  // ✅ STATUS ICON
  const getStatusIcon = (msg) => {
    if (msg.sender !== currentUser) return "";

    if (msg.status === "sent") return "✔";
    if (msg.status === "delivered") return "✔✔";
    if (msg.status === "seen") return "✔✔"; // style later (blue)

    return "";
  };

  return (
    <div className="chat-container">

      {/* HEADER */}
      <div className="chat-header">
        <strong>{id}</strong>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">

        {messages.length === 0 && (
          <div className="empty-chat">Start conversation 👋</div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-row ${
              msg.sender === currentUser ? "right" : "left"
            }`}
            onContextMenu={(e) => {
              e.preventDefault();
              setMenuIndex(i);
            }}
          >
            <div className="chat-bubble">

              {editingIndex === i ? (
                <input
                  autoFocus
                  defaultValue={msg.text}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveEdit(i, e.target.value);
                    }
                  }}
                  onBlur={(e) => saveEdit(i, e.target.value)}
                  className="edit-input"
                />
              ) : (
                <>
                  <div className="msg-text">{msg.text}</div>
                  <div className="time">
                    {msg.time} {getStatusIcon(msg)}
                  </div>
                </>
              )}

              {menuIndex === i && (
                <div className="menu">
                  <div onClick={() => copyMessage(msg.text)}>📋 Copy</div>
                  <div onClick={() => editMessage(i)}>✏️ Edit</div>
                  <div onClick={() => deleteMessage(i)}>🗑 Delete</div>
                </div>
              )}

            </div>
          </div>
        ))}

        <div ref={bottomRef}></div>
      </div>

      {/* TYPING */}
      {typing && <div className="typing">{typing}</div>}

      {/* INPUT */}
      <div className="chat-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type message..."
        />

        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default ChatWeb;