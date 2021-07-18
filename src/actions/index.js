import streams from '../apis/streams'
import {
    SIGN_IN,SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from './types'
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
//pullng out the id to determine whose stream belong to which user
export const createStream = formValues => async (dispatch,getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues,userId});
    dispatch({type: CREATE_STREAM, payload: response.data})
};

//get all the  streams action creator 
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

//get a single stream 
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data})
};

//edit our stream 
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})
};

//delete our stream 
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}` );
    dispatch({type: DELETE_STREAM, payload: id})
};
    //returns a new obj, the second param will access an id and override it with a new id
// return{...state, [action.payload.id]:action.payload}


  
  