// import React from "react";

const authReducer = (state = [], action) => {
	switch (action.type) {
		case "AUTH":
			localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
			console.log(action.payload);
			return { ...state, ...action.payload };
		case "LOGOUT":
			localStorage.clear();
			return { ...state, action: null };
		default:
			return null;
	}
};

export default authReducer;
