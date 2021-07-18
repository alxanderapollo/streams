import{
FETCH_STREAM,
FETCH_STREAMS,
CREATE_STREAM,
EDIT_STREAM,
DELETE_STREAM
} from '../actions/types'
//dealing with our responses
// Redux requires that a new object always be returned 
//returns a new object, and a new id 
export default (state ={}, action) => {
    switch (action.type){
        //post, put, delete
        case FETCH_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        default:
            return state; 
    }
}