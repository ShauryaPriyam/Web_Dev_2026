import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost
} from "../controllers/post.controller.js";

import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const postRoutes = express.Router();
postRoutes.use(arcjetProtection);

postRoutes.post("/", createPost);
postRoutes.get("/", getAllPosts);
postRoutes.get("/:postId", getPostById);
postRoutes.delete("/:postId", deletePost);

export default postRoutes;
