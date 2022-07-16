import { combineReducers } from "redux";
import { poestReducer } from "./posts/postsReducer";

export default combineReducers({
	posts: poestReducer,
});
