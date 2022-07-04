<<<<<<< HEAD
import { SIGN_IN, SIGN_OUT } from "./types";
=======

import { SIGN_IN, SIGN_OUT } from "./types.js";
>>>>>>> 9c30277 (fix route error)

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