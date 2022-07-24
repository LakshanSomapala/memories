import React, { useEffect, useState } from "react";
import memories from "../../images/memories.png";
import { Link, Outlet } from "react-router-dom";
import "./navbarStyles.css";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const userState = useSelector((state) => state.auth);

	useEffect(() => {
		if (user?.token) {
			const token = user.token;
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [userState, location]);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		setUser(null);
		navigate("/");
	};

	return (
		<div className="heading-container">
			<div className="heading">
				<Link className="heading-text" to={"/"}>
					Memories
				</Link>
				<img className="heading-image" src={memories} alt="memories"></img>
			</div>
			<div>
				<span className="aaa">
					{user ? (
						<>
							<button onClick={logout}>Sign out</button>
							<span>{user.given_name}</span>
							<span>{user.family_name}</span>
							{user.picture ? (
								<img src={user.picture} alt="" />
							) : (
								<span>{user.given_name[0].toUpperCase()}</span>
							)}
						</>
					) : (
						<Link to={"/auth"}>
							<button>Sign In</button>
						</Link>
					)}
				</span>
			</div>
			<Outlet />
		</div>
	);
};

export default Navbar;
