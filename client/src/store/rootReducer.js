import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import { postReducer } from "./posts/postsReducer";

export default combineReducers({
	posts: postReducer,
	auth: authReducer,
});
