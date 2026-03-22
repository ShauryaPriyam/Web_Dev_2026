import { Routes, Route, Navigate } from "react-router-dom";
import Contacts from "./pages/Contacts";
import ChatLayout from "./pages/ChatLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/chat/:id" element={<ChatLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;