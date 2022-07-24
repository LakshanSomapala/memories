import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../action/auth/authAction";
import "./signInStyles.css";

const initialStateForm = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(true);
	const [formData, setFormData] = useState(initialStateForm);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signIn(formData));
		navigate("/");
	};

	const handleChnage = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const googleSuccess = async (res) => {
		const decodeUser = jwt_decode(res.credential);
		dispatch({ type: "AUTH", payload: decodeUser });
		navigate("/");
	};
	const googleFailure = (error) => {
		console.log(error);
		console.log("Google sign in is unsuccessfull");
	};

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<form className="signIn">
			<span>Sign In</span>

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
			></input>
			<VisibilityIcon onClick={handleShowPassword} />
			<GoogleLogin
				onSuccess={googleSuccess}
				onFailure={googleFailure}
				cookiePolicy="single_host_origin"
			></GoogleLogin>
			<button type="button" onClick={handleSubmit}>
				Sign In
			</button>
		</form>
	);
};

export default SignIn;
