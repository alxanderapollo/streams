import streams from '../apis/streams'
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
//everytime a user makes a request to a steam itll be posted to this end point
export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues);
};
  