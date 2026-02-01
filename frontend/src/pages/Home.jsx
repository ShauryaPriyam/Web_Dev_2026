import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

const Home = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const alreadySent = useRef(false);

  useEffect(() => {
    const sendUser = async () => {
      const token = await getToken();

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

    if (user && !alreadySent.current) {
      sendUser();
    }
  }, [user]);

  return (
    <div className="text-white p-6">
      <h1 className="text-xl font-semibold">
        Welcome, {user?.firstName}
      </h1>
    </div>
  );
};

export default Home;
