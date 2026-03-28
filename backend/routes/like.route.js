import express from "express";
import { likePost, unlikePost } from "../controllers/like.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.post("/:postId", protectRoute, likePost);
router.delete("/:postId", protectRoute, unlikePost);

export default router;
