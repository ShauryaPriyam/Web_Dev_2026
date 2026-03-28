import express from "express";
import {
  getAllUsers,
  getReports,
  deletePostByAdmin
} from "../controllers/admin.controller.js";


import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.get("/users", protectRoute, getAllUsers);
router.get("/reports", protectRoute, getReports);
router.delete("/post/:postId", protectRoute, deletePostByAdmin);

export default router;
