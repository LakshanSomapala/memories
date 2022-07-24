import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import "./authStyles.css";
// import { signUp, signIn } from "../../action/auth/authAction";
import SignUp from "../signUp/signUpComponent";
import SignIn from "../signIn/signInComponent";

const initialStateForm = {
	fName: "",
	lName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const [showPassword, setShowPassword] = useState(true);
	const [isSignup, setIsSignup] = useState(false);
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
		console.log("switchMode " + isSignup);
	};

	return (
		<div>
			<div className="sign-form-container">
				<LockIcon></LockIcon>
				{isSignup ? <SignUp></SignUp> : <SignIn></SignIn>}

				<button type="button" onClick={switchMode}>
					{isSignup
						? "Already have an account ? Sign In"
						: "Don't have and account? Sign Up"}
				</button>
			</div>
		</div>
	);

	// const [formData, setFormData] = useState(initialStateForm);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("handleSubmit " + isSignup);
	// 	if (isSignup) {
	// 		dispatch(signUp(formData));
	// 	} else {
	// 		dispatch(signIn(formData));
	// 	}
	// };

	// const handleChnage = (e) => {
	// 	e.preventDefault();
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	// const handleShowPassword = () => {
	// 	setShowPassword((prevShowPassword) => !prevShowPassword);
	// };

	// const googleSuccess = async (res) => {
	// 	const decodeUser = jwt_decode(res.credential);
	// 	dispatch({ type: "AUTH", payload: decodeUser });
	// 	navigate("/");
	// };
	// const googleFailure = (error) => {
	// 	console.log(error);
	// 	console.log("Google sign in is unsuccessfull");
	// };

	// return (
	// 	<div>
	// 		<form className="sign-form-container" onSubmit={handleSubmit}>
	// 			<LockIcon></LockIcon>
	// 			<span>{isSignup ? `Sign Up` : `Sign In`}</span>
	// 			{isSignup && (
	// 				<>
	// 					<input
	// 						type="text"
	// 						id="fName"
	// 						name="fName"
	// 						placeholder="First Name"
	// 						onChange={handleChnage}
	// 					/>
	// 					<input
	// 						type="text"
	// 						id="lName"
	// 						name="lName"
	// 						placeholder="Last Name"
	// 						onChange={handleChnage}
	// 					/>
	// 				</>
	// 			)}
	// 			<input
	// 				type="email"
	// 				id="email"
	// 				name="email"
	// 				placeholder="Email"
	// 				onChange={handleChnage}
	// 			/>
	// 			<input
	// 				type={showPassword ? `password` : `text`}
	// 				id="password"
	// 				name="password"
	// 				placeholder="Password"
	// 				onChange={handleChnage}
	// 			/>
	// 			<VisibilityIcon onClick={handleShowPassword} />
	// 			{isSignup && (
	// 				<>
	// 					<input
	// 						type="password"
	// 						id="confirmPassword"
	// 						name="confirmPassword"
	// 						placeholder="Confirm password"
	// 						onChange={handleChnage}
	// 					/>
	// 				</>
	// 			)}
	// 			<GoogleLogin
	// 				onSuccess={googleSuccess}
	// 				onFailure={googleFailure}
	// 				cookiePolicy="single_host_origin"
	// 			></GoogleLogin>
	// 			<button type="submit" onClick={handleSubmit}>
	// 				{isSignup ? `Sign Up` : `Sign In`}
	// 			</button>
	// 			<button type="button" onClick={switchMode}>
	// 				{isSignup
	// 					? "Already have an account ? Sign In"
	// 					: "Don't have and account? Sign Up"}
	// 			</button>
	// 		</form>
	// 	</div>
	// );
};

export default Auth;
