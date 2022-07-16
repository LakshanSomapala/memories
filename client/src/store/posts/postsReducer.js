// import Posts from ../../components/posts/postsComponent;
import { POST_ACTION_TYPES } from "../../action/actionTypes";

export const poestReducer = (state = [], action) => {
	//state always will be posts
	switch (action.type) {
		case POST_ACTION_TYPES.FETCH_ALL:
			return action.payload;
		case POST_ACTION_TYPES.CREATE:
			return [...state, action.payload];
		case POST_ACTION_TYPES.UPDATE:
		case POST_ACTION_TYPES.LIKE:
			return state.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case POST_ACTION_TYPES.DELETE:
			return state.filter((post) => post._id !== action.payload);
		default:
			return state;
	}
};
