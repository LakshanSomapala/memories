// import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const existingUser = await userModel.findOne({ email });
		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist" });

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isPasswordCorrect)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			"test",
			{ expiresIn: "1h" }
		);

		res.status(200).json({
			email: existingUser.email,
			family_name: existingUser.family_name,
			given_name: existingUser.given_name,
			id: existingUser._id,
			token,
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};

export const signUp = async (req, res) => {
	const { email, password, family_name, given_name, confirmPassword } =
		req.body;

	try {
		const existingUser = await userModel.findOne({ email });
		if (existingUser)
			return res.status(400).json({ message: "User already exist" });

		if (password !== confirmPassword)
			return res.status(400).json({ message: "Password don't match" });

		const hashedPasswoed = await bcrypt.hash(password, 12);
		const user = await userModel.create({
			email,
			password: hashedPasswoed,
			family_name,
			given_name,
		});

		const token = jwt.sign({ email: user.email, id: user._id }, "test", {
			expiresIn: "1h",
		});

		// const email = user.email;
		// const family_name = user.family_name;
		// const given_name = user.given_name;
		res.status(200).json({
			email: user.email,
			family_name: user.family_name,
			given_name: user.given_name,
			id: user._id,
			token,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
