import express from "express";
import { signIn, signUp } from "../controllers/userController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.post("/signIn", signIn);
userRoutes.post("/signUp", signUp);

export default userRoutes;
