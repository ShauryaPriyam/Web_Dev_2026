import express from "express";
import { searchUsers, searchPosts } from "../controllers/search.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.get("/users", protectRoute, searchUsers);
router.get("/posts", protectRoute, searchPosts);

export default router;

