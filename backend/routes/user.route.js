import express from "express";


import { 
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser
} from "../controllers/user.controller.js";



import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.get("/:userId", protectRoute, getUserProfile);
router.put("/:userId", protectRoute, updateUserProfile);
router.post("/follow/:userId", protectRoute, followUser);
router.post("/unfollow/:userId", protectRoute, unfollowUser);

export default router;
