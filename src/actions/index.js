import {SIGN_IN,SIGN_OUT} from './types'
//Action Creators for our store
export const signIn = () => {
    return {
        type: SIGN_IN,
    };

};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };

};