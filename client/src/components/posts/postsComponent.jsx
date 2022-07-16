import React from "react";
import Post from "./post/postComponent";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component.jsx";
import "./postsStyles.css";

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	// console.log(posts);
	return (
		<div className="main-posts-container">
			<h1>Posts</h1>
			{posts.lenght ? (
				<Spinner />
			) : (
				<div className="posts-container">
					{posts.map((post) => (
						<div key={post._id} className="posts">
							<Post post={post} setCurrentId={setCurrentId}></Post>
						</div>
					))}
				</div>
			)}
			{/* <Post></Post> */}
			{/* <Post></Post> */}
		</div>
	);
};

export default Posts;
