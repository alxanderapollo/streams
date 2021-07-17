//Action for signing in and out
//to determine whether the user is signed in or not
import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INITIAL_STATE = {
    isSignedIn:null,
    userID: null
};


//Reducer to tell us whether the user is signed in or not
//state object will indicate besides truth and false other information such as isSignedin
//Redux now has an initial value
export default (state=INITIAL_STATE, action) =>{
    switch (action.type){
        case SIGN_IN:
            // the spread syntax allows us to update or modify a property inside of it
            //when the user signs in update the payload property 
            return { ...state, isSignedIn: true, userId:action.payload}
        case SIGN_OUT:
            //when a user signs in out reset the payload property back to null 
            return { ...state, isSignedIn: false, userId: null}
        default:
            return state;
    }
}