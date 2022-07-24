import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./signUpStyles.css";
// import { signUp, signIn } from "../../action/auth/authAction";
import { signUp } from "../../action/auth/authAction";

const initialStateForm = {
	given_name: "",
	family_name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(true);
	const [formData, setFormData] = useState(initialStateForm);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signUp(formData));
		navigate("/");
	};

	const handleChnage = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<div className="signUp">
			<span>Sign Up</span>

			<input
				type="text"
				id="given_name"
				name="given_name"
				placeholder="First Name"
				onChange={handleChnage}
			/>
			<input
				type="text"
				id="family_name"
				name="family_name"
				placeholder="Last Name"
				onChange={handleChnage}
			/>

			<input
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				onChange={handleChnage}
			/>
			<input
				type={showPassword ? `password` : `text`}
				id="password"
				name="password"
				placeholder="Password"
				onChange={handleChnage}
			/>
			<VisibilityIcon onClick={handleShowPassword} />
			<input
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="Confirm password"
				onChange={handleChnage}
			/>
			<button type="button" onClick={handleSubmit}>
				Sign Up
			</button>
		</div>
	);
};

export default SignUp;
