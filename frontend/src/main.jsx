import "./index.css";
import "./app.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import App from "./App.jsx";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyResetCode from "./pages/VerifyResetCode";
import ResetPassword from "./pages/ResetPassword";
import SSOCallback from "./pages/SSOCallback";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home";
import Landingpage from "./pages/landingpage";

// Your extra pages
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import EditPage from "./pages/EditPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import PostPage from "./pages/PostPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/landing" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />

        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-reset" element={<VerifyResetCode />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="sso-callback" element={<SSOCallback />} />

        
        <Route path="" element={<Layout />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="profile/:id/edit" element={<EditPage />} />
          <Route path="post" element={<PostPage />} />
          <Route path="post/:id" element={<QuestionPage />} />
        </Route>
      </Route>

      
      <Route path="*" element={<Navigate to="/landing" />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);