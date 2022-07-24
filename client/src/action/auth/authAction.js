import * as api from "../../api";
import { AUTH_ACTION_TYPES } from "./authActionTypes";

export const signIn = (formData) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);
		dispatch({ type: "AUTH", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (formData) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		dispatch({ type: "AUTH", payload: data });
	} catch (error) {
		console.log(error);
	}
};
