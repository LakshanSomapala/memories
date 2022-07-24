import React, { useState, useEffect } from "react";
import "./formStyles.css";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/post/postsAction";
import { useLocation } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
	const user = JSON.parse(localStorage.getItem("profile"));
	const location = useLocation();

	const [postData, setPostData] = useState({
		name: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const post = useSelector((state) =>
		currentId ? state.posts.find((post) => post._id === currentId) : null
	);

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post, location]);

	const dispatch = useDispatch();

	const handSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(
				updatePost(currentId, {
					...postData,
					name: `${user.given_name} ${user.family_name}`,
				})
			);
			clear();
		} else {
			dispatch(
				createPost({
					...postData,
					name: `${user.given_name} ${user.family_name}`,
				})
			);
			clear();
		}
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			// creator: "",
			title: "",
			name: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	if (!user) {
		return (
			<span>
				Please sign in to create your own memories and like other's memories
			</span>
		);
	} else {
		return (
			<div className="post-form">
				<h4>{currentId ? "Editing" : "Creating"} a Memory</h4>
				<form className="post-form-elements" onSubmit={handSubmit}>
					<input
						type="text"
						name="title"
						id="title"
						className="form-input"
						placeholder="Title"
						value={postData.title}
						onChange={(event) =>
							setPostData({ ...postData, title: event.target.value })
						}
					/>
					<input
						type="text"
						name="message"
						id="message"
						className="form-input"
						placeholder="Message"
						value={postData.message}
						onChange={(event) =>
							setPostData({ ...postData, message: event.target.value })
						}
					/>
					<input
						type="text"
						name="tags"
						id="tags"
						className="form-input"
						placeholder="Tags"
						value={postData.tags}
						onChange={(event) =>
							setPostData({ ...postData, tags: event.target.value })
						}
					/>
					<div>
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) =>
								setPostData({ ...postData, selectedFile: base64 })
							}
						></FileBase>
					</div>
					<button type="submit" className="form-button">
						submit
					</button>
					<button type="reset" className="form-button">
						clear
					</button>
				</form>
			</div>
		);
	}
};

export default Form;
