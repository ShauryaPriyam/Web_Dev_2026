import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SSOCallback = () => {
  const { handleRedirectCallback } = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    handleRedirectCallback().then(() => navigate("/"));
  }, []);

  return <p className="text-center mt-10">Signing in…</p>;
};

export default SSOCallback;
