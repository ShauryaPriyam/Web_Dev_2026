import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import AuthCard from "../components/AuthCard";

const Signup = () => {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async () => {
    if (!isLoaded) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      alert("Verification code sent to your email");
    } catch (err) {
      alert(err?.errors?.[0]?.message);
    }
  };

  const googleSignup = async () => {
    if (!isLoaded) return;

    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/home",
    });
  };

  return (
    <AuthCard title="Create Account">
     
      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      
      <input
        type="password"
        className="input mt-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      
      <input
        type="password"
        className="input mt-3"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

    
      <button className="btn-primary mt-4" onClick={signup}>
        Sign up
      </button>

      
      <div className="text-center my-4 text-sm text-zinc-400">OR</div>

      
      <button className="btn-outline" onClick={googleSignup}>
        Sign up with Google
      </button>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-[#00ADB5]">
          Login
        </a>
      </p>
    </AuthCard>
  );
};

export default Signup;
