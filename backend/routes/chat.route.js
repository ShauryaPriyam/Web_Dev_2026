import express from "express";
import {
  createChat,
  getChats,
  sendMessage
} from "../controllers/chat.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

router.post("/", protectRoute, createChat);
router.get("/", protectRoute, getChats);
router.post("/:chatId/message", protectRoute, sendMessage);

export default router;
