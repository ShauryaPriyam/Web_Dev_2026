import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatWeb from "./ChatWeb";

function ChatLayout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

  return (
    <div className="layout">
      <div className="sidebar">
        <h3 className="sidebar-title">Chats</h3>

        {users.map((user) => (
          <div
            key={user.id}
            className={`contact-card ${user.id === id ? "active-user" : ""}`}
            onClick={() => navigate(`/chat/${user.id}`)}
          >
            <div className="avatar">{user.name[0]}</div>
            <div>{user.name}</div>
          </div>
        ))}
      </div>

      <div className="chat-area">
        {id ? <ChatWeb /> : <div>Select chat</div>}
      </div>
    </div>
  );
}

export default ChatLayout;