import React, { useState, useEffect } from "react";
import Posts from "../posts/postsComponent";
import Form from "../form/formComponent";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../action/post/postsAction";
import Navbar from "../navbar/navbarComponent";
import "./homeStyles.css";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const userState = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, userState]);

	return (
		<div>
			<div className="posts-body">
				<div className="posts">
					<Posts setCurrentId={setCurrentId} />
					<Form currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			</div>
		</div>
	);
};

export default Home;
