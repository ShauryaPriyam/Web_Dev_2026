import express from "express";
import {
  createCommunity,
  joinCommunity,
  getCommunities
} from "../controllers/community.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.post("/", protectRoute, createCommunity);
router.get("/", protectRoute, getCommunities);
router.post("/:communityId/join", protectRoute, joinCommunity);

export default router;
