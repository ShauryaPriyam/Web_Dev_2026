import { Router } from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { signup, login } from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.post("/signup", ClerkExpressRequireAuth, signup);
authRoute.post("/login", ClerkExpressRequireAuth, login)

export { authRoute }