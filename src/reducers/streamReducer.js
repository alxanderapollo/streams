import _ from 'lodash';

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
    // first 3 post, put, get
    //delete doesnt require an id because the payload itself is the id
    //omit creates a new object with all the properties we passed in with the payload
    switch (action.type){
        case FETCH_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM: 
        return {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM: 
        return _.omit(state, action.payload)
        //takes the state
        //...map means take the big object
        // map keys function takes the list of strreams takes from the api  and creates an object in which the objects are mapped to the id's
        //finally what is returned is a bigger object
        case FETCH_STREAMS: 
        return {...state, ..._.mapKeys( action.payload, 'id')}
        
        default:
            return state; 
    }
}