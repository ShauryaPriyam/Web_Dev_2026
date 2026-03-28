import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import HomePage from "./HomePage";

const Home = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken, signOut } = useAuth();
  const alreadySent = useRef(false);

  if (!isLoaded) return <div className="text-white">Loading...</div>;
  if (!isSignedIn) return <div className="text-white">Redirecting...</div>;

  useEffect(() => {
    if (!user || alreadySent.current) return;

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
  }, [user]);

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-white">
          Welcome, {user?.firstName}
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => signOut({ redirectUrl: "/login" })}
            className="text-white bg-red-600 px-5 py-2 rounded-full"
          >
            Log out
          </button>

          <button
            onClick={async () => {
              if (confirm("Delete account?")) {
                await user.delete();
                signOut({ redirectUrl: "/" });
              }
            }}
            className="text-red-500 border border-red-500 px-5 py-2 rounded-full"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Actual Page */}
      <HomePage />
    </>
  );
};

export default Home;