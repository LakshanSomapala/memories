import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	// DB model for post
	title: String,
	message: String,
	name: String,
	creator: String,
	tags: [String],
	selectedFile: String, // for image
	likes: {
		type: [String],
		default: [],
	},
	craetedAt: {
		type: Date,
		default: new Date().toISOString(),
	},
});

const postModel = mongoose.model("PostModel", postSchema);

export default postModel;
