import mongoose from "mongoose";
import postModel from "../models/postModel.js";

//all the handlers/logics for the route
export const getPosts = async (req, res) => {
	// res.send("THIS WORKS!");
	try {
		const posts = await postModel.find(); //get all the post data from DB
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json({ error });
	}
};

export const createPostModel = async (req, res) => {
	// res.send("Post Creation");
	const post = req.body; //this the frontend post details. body is the data from front-end (submited post form)
	const newPost = new postModel(post);

	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ error });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that id");

	try {
		const uupdatedPost = await postModel.findByIdAndUpdate(
			_id,
			{ ...post, _id },
			{
				new: true,
			}
		);
		res.json(uupdatedPost);
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = async (req, res) => {
	const { id: _id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that id");

	try {
		await postModel.findByIdAndRemove(_id);
		res.json({ message: "Post Deteted successfully" });
	} catch (error) {
		console.log(error);
	}
};

export const likePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with that id");

	try {
		const post = await postModel.findById(id);
		const updatedPost = await postModel.findByIdAndUpdate(
			id,
			{
				likeCount: post.likeCount + 1,
			},
			{ new: true }
		);
		res.json(updatedPost);
	} catch (error) {
		console.log(error);
	}
};
