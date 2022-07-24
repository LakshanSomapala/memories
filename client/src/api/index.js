import axios from "axios";
// import GoogleLogin from "react-google-login";
const API = axios.create({ baseURL: "http://localhost:5001" });

// const url = "http://localhost:5001/posts";
// const url = "https://memoapp-project.herokuapp.com/posts";

API.interceptors.request.use((req) => {
	if (
		localStorage.getItem("profile") &&
		JSON.parse(localStorage.getItem("profile")).token
	) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	} else if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).sub
		}`;
	}

	return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
	API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
