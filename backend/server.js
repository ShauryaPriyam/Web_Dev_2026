// server/server.js
import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
import { protectRoute } from "./middleware/auth.middleware.js";
import { authRoute } from "./routes/auth.route.js";

dotenv.config()
mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "API running" });
});


// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use("/api/posts",protectRoute, postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
// app.use("/api/chats", chatRoutes);
// app.use("/api/communities", communityRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/search", searchRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
