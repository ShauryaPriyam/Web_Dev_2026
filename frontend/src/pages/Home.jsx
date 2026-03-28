import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const { user } = useUser();
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="text-white">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="text-white">Redirecting...</div>;
  }
  const { getToken } = useAuth();

  const alreadySent = useRef(false);
  const { signOut } = useAuth();
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user || alreadySent.current) return;

    const sendUser = async () => {
      const token = await getToken();
      if (!token) return;

      await fetch("https://api.yourbackend.com/api/user/sync", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clerkUserId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          name: user.fullName,
        }),
      });

      alreadySent.current = true;
    };

    sendUser();
  }, [isLoaded, isSignedIn, user]);

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-semibold text-white">
        Welcome, {user?.firstName}
      </h1>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => signOut({ redirectUrl: "/login" })}
          className="text-white bg-red-600 hover:bg-red-700 font-medium text-sm px-5 py-2 rounded-full transition-colors duration-200"
        >
          Log out
        </button>
        <button
          type="button"
          onClick={async () => {
            if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
              await user.delete();
              signOut({ redirectUrl: "/" });
            }
          }}
          className="text-red-500 border border-red-500 hover:bg-red-600 hover:text-white font-medium text-sm px-5 py-2 rounded-full transition-colors duration-200"
        >
          Delete Account
        </button>
      </div>
    </div>

  );
};

export default Home;
