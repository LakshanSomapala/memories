import express from "express";
import {
	getPosts,
	createPostModel,
	updatePost,
	deletePost,
	likePost,
} from "../controllers/postsController.js";

const postRoutes = express.Router();

//In here, reach http://localhost:5001/posts. because we add posts prefix to the url in index.js
postRoutes.get("/", getPosts);
postRoutes.post("/", createPostModel);
postRoutes.patch("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
postRoutes.patch("/:id/likePost", likePost);

export default postRoutes;
