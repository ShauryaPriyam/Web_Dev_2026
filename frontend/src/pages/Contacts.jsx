import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

  const addUser = () => {
    if (!name.trim()) return;

    const newUser = {
      id: name,
      name: name,
    };

    const updated = [...users, newUser];
    setUsers(updated);

    localStorage.setItem("users", JSON.stringify(updated));
    setName("");
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Contacts</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add contact"
      />

      <button onClick={addUser}>Add</button>

      {users.map((user) => (
        <div
          key={user.id}
          className="contact-card"
          onClick={() => navigate(`/chat/${user.id}`)}
        >
          <div className="avatar">{user.name[0]}</div>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;