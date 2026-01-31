import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const Login = () => {
  const { signIn, isLoaded } = useSignIn();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!isLoaded) return;
    try {
      await signIn.create({ identifier: email, password });
      navigate("/");
    } catch (err) {
      alert(err.errors?.[0]?.message);
    }
  };

  const googleLogin = async () => {
    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <AuthCard title="Login">
      <input
        className="
          w-full
          px-4 py-3
          rounded-lg
          bg-[#1f2933]/60
          border border-[#393E46]
          text-white
          placeholder-zinc-400

          focus:outline-none
          focus:border-[#393E46]
          focus:ring-2
          focus:ring-[#393E46]/40

          transition-all
          duration-200
        "
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="
          w-full
          px-4 py-3
          mt-3
          rounded-lg
          bg-[#1f2933]/60
          border border-[#393E46]
          text-white
          placeholder-zinc-400

          focus:outline-none
          focus:border-[#393E46]
          focus:ring-2
          focus:ring-[#393E46]/40

          transition-all
          duration-200
        "
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn-primary mt-4" onClick={login}>
        Login
      </button>
      <p className="text-center mt-3"> OR</p>
      <button className="btn-outline mt-3 " onClick={googleLogin}>
        Continue with Google
      </button>

      <p className="text-sm text-center mt-4">
        <a href="/forgot-password" className="text-[#00ADB5]">
          Forgot password?
        </a>
      </p>

      <p className="text-sm text-center mt-2">
        New user?{" "}
        <a href="/signup" className="text-[#00ADB5] mx-2 ">
          Sign up
        </a>
      </p>
    </AuthCard>
  );
};

export default Login;
