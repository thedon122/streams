import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INTIAL_STATE = {
    isSignedIn: null,
    userId: null
};

<<<<<<< HEAD
export default (state = {INTIAL_STATE}, action) => {
=======
export default (state = INTIAL_STATE, action) => {
>>>>>>> 9c30277 (fix route error)
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};