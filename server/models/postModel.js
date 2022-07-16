import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	// DB model for post
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String, // for image
	likeCount: {
		type: Number,
		default: 0,
	},
	craetedAt: {
		type: Date,
		default: new Date(),
	},
});

const postModel = mongoose.model("PostModel", postSchema);

export default postModel;
