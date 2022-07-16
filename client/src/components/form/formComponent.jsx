import React, { useState, useEffect } from "react";
import "./formStyles.css";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/postsAction";

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setPostData] = useState({
		creator: "",
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
	}, [post]);

	const dispatch = useDispatch();

	const handSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(updatePost(currentId, postData));
			clear();
		} else {
			dispatch(createPost(postData));
			clear();
		}
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};
	return (
		<div className="post-form">
			<h4>{currentId ? "Editing" : "Creating"} a Memory</h4>
			<form className="post-form-elements" onSubmit={handSubmit}>
				<input
					type="text"
					name="creator"
					id="creator"
					className="form-input"
					placeholder="Creator"
					value={postData.creator}
					onChange={(event) =>
						setPostData({ ...postData, creator: event.target.value })
					}
				/>
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
};

export default Form;
