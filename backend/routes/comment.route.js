import express from "express";
import {
  addComment,
  deleteComment
} from "../controllers/comment.controller.js";


import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.post("/:postId", protectRoute, addComment);
router.delete("/:commentId", protectRoute, deleteComment);

export default router;
