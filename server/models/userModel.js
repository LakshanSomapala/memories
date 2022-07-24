import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	given_name: { type: String, required: true },
	family_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	id: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
