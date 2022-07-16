import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import "./postStyles.css";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../action/postsAction";

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	return (
		<div className="post-container" key={post.id}>
			<img src={post.selectedFile} alt="" title={post.title} />
			<div>
				<span>{post.creator}</span>
				<span>{moment(post.craetedAt).fromNow()}</span>
			</div>
			<div>
				<button onClick={() => setCurrentId(post._id)}>
					<MoreHorizIcon></MoreHorizIcon>
				</button>
			</div>
			<div className="details">
				<span>{post.tags.map((tag) => `#${tag} `)}</span>
				<span>{post.message}</span>
			</div>
			<div>
				<button onClick={() => dispatch(likePost(post._id))}>
					<ThumbUpIcon></ThumbUpIcon>
					<span>Like {post.likeCount}</span>
				</button>
				<button onClick={() => dispatch(deletePost(post._id))}>
					<span>Delete</span>
					<DeleteIcon></DeleteIcon>
				</button>
			</div>
		</div>
	);
};

export default Post;
