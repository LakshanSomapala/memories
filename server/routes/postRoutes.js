import express from "express";
import {
	getPosts,
	createPostModel,
	updatePost,
	deletePost,
	likePost,
} from "../controllers/postsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const postRoutes = express.Router();

//In here, reach http://localhost:5001/posts. because we add posts prefix to the url in index.js
// no matter user logged in or not can see post, but cannot do any other action without login. that controlls by authMiddleware
postRoutes.get("/", getPosts);
postRoutes.post("/", authMiddleware, createPostModel);
postRoutes.patch("/:id", authMiddleware, updatePost);
postRoutes.delete("/:id", authMiddleware, deletePost);
postRoutes.patch("/:id/likePost", authMiddleware, likePost);
// postRoutes.patch("/:id/likePost", likePost);

export default postRoutes;
