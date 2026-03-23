import { Router } from "express";
import { clerkMiddleware } from "@clerk/express";
import { signup, login, handleBoth } from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.use(clerkMiddleware())

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/",handleBoth);
export { authRoute }