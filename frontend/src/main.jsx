import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const clerkkey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkkey}>
      <App />
    </ClerkProvider>
  </BrowserRouter>
);
