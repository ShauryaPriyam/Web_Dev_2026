import { useSignUp } from "@clerk/clerk-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const VerifyEmail = () => {
  const { signUp, isLoaded } = useSignUp();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // digits only
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // On backspace, move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];
    pasted.forEach((char, i) => {
      if (/\d/.test(char)) newOtp[i] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const verify = async () => {
    if (!isLoaded) return;
    const code = otp.join("");
    if (code.length < 6) {
      alert("Please enter the full 6-digit code");
      return;
    }

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        navigate("/home");
      } else {
        alert("Verification incomplete. Please try again.");
      }
    } catch (err) {
      alert(err?.errors?.[0]?.message || "Invalid code. Please try again.");
    }
  };

  const resendCode = async () => {
    if (!isLoaded) return;
    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      alert("A new code has been sent to your email.");
    } catch (err) {
      alert(err?.errors?.[0]?.message);
    }
  };

  return (
    <AuthCard title="Verify Your Email">
      <p className="text-sm text-zinc-400 text-center mb-6">
        Enter the 6-digit code sent to your email address.
      </p>

      {/* OTP Boxes */}
      <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="input"
            style={{
              width: "48px",
              height: "52px",
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "600",
              padding: "0",
              borderColor: digit ? "#00ADB5" : undefined,
            }}
          />
        ))}
      </div>

      <button className="btn-primary" onClick={verify}>
        Verify & Continue
      </button>

      <p className="text-sm text-center mt-4 text-zinc-400">
        Didn't receive a code?{" "}
        <button
          onClick={resendCode}
          className="text-[#00ADB5] bg-transparent border-none cursor-pointer p-0"
        >
          Resend
        </button>
      </p>
    </AuthCard>
  );
};

export default VerifyEmail;