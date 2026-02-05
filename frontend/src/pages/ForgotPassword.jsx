import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const ForgotPassword = () => {
  const { signIn, isLoaded } = useSignIn();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const sendCode = async () => {
    if (!isLoaded) return;

    try {
      await signIn.create({
        identifier: email,
        strategy: "reset_password_email_code",
      });
      navigate("/verify-reset");
    } catch (err) {
      alert(err?.errors?.[0]?.message);
    }
  };

  return (
    <AuthCard title="Forgot Password">
  <input
    className="
      w-full
      mt-8
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

  <button
    className="
      w-full
      mt-10
      py-3
      rounded-lg
      bg-teal-500
      hover:bg-teal-400
      text-white
      font-medium

      transition-all
      duration-200
      hover:shadow-[0_12px_30px_rgba(20,184,166,0.35)]
      active:scale-[0.98]
    "
    onClick={sendCode}
  >
    Send OTP
  </button>
</AuthCard>

  );
};

export default ForgotPassword;
