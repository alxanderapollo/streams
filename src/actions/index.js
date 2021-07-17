import {SIGN_IN,SIGN_OUT} from './types'
//Action Creators for our store
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload:userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};