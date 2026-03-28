import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost
} from "../controllers/post.controller.js";


import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.post("/", protectRoute, createPost);
router.get("/", protectRoute, getAllPosts);
router.get("/:postId", protectRoute, getPostById);
router.delete("/:postId", protectRoute, deletePost);

export default router;
