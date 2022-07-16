import * as api from "../api"; //using * we can access all the functions in file rather than importing each and every one
import { POST_ACTION_TYPES } from "./actionTypes";

import axios from "axios";

const url = "http://localhost:5001/posts";

//Action Creaters
export const getPosts = () => async (dispatch) => {
	// async()=> is for thunk
	try {
		const response = await axios.get(url);
		// const response = await api.fetchPosts();
		const { data } = response;
		const action = { type: POST_ACTION_TYPES.FETCH_ALL, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (newPost) => async (dispatch) => {
	try {
		const response = await api.createPost(newPost);
		const { data } = response;
		const action = { type: POST_ACTION_TYPES.CREATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, updatedPost);
		const action = { type: POST_ACTION_TYPES.UPDATE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		const action = { type: POST_ACTION_TYPES.DELETE, payload: id };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		const action = { type: POST_ACTION_TYPES.LIKE, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error);
	}
};

//without thunks
// const getPosts = () => {
// 	const action = { type: "FETCH_ALL", payload: [] };
// 	dispatch(action);
// };
