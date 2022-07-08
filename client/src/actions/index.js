import { formValues } from "redux-form";
import streams from "../apis/streams.js";
import { SIGN_IN, SIGN_OUT } from "./types.js";
import { CREATE_STREAM } from "./types.js";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({ type: CREATE_STREAM, payload: response.data });
};