import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyResetCode from "./pages/VerifyResetCode";
import ResetPassword from "./pages/ResetPassword";
import SSOCallback from "./pages/SSOCallback";
import Home from "./pages/Home";

import Landingpage from "./pages/landingpage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";


function App() {
  return (
    <Routes>
      

      <Route path="/landing" element={<Landingpage/>}/>
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <Navigate to="/home" />
            </SignedIn>

            <SignedOut>
              <Navigate to="/landing" />
            </SignedOut>
          </>
        }
      />

      
      <Route
        path="/home"
        element={
          <SignedIn>
            <Home />
          </SignedIn>
        }
      />

      
      <Route
        path="/login"
        element={
          <SignedOut>
            <Login /> // Landing page component should be rendered here instead
          </SignedOut>
        }
      />

      <Route
        path="/signup"
        element={
          <SignedOut>
            <Signup />
          </SignedOut>
        }
      />

      
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-reset" element={<VerifyResetCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/sso-callback" element={<SSOCallback />} />

      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;


