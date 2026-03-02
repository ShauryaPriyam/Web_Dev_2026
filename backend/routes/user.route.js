import express from "express";


import { 
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser
} from "../controllers/user.controller.js";



import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const userRouter = express.Router();
userRouter.use(arcjetProtection);

userRouter.get("/:userId", protectRoute, getUserProfile);
userRouter.put("/:userId", protectRoute, updateUserProfile);
userRouter.post("/follow/:userId", protectRoute, followUser);
userRouter.post("/unfollow/:userId", protectRoute, unfollowUser);

export default userRouter