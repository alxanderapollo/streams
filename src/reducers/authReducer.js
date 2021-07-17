//Action for signing in and out
//to determine whether the user is signed in or not
const INITIAL_STATE = {
    isSignedIn:null
};


//Reducer to tell us whether the user is signed in or not
//state object will indicate besides truth and false other information such as isSignedin
//Redux now has an initial value
export default (state=INITIAL_STATE, action) =>{
    switch (action.type){
        case 'SIGN_IN':
            // the spread syntax allows us to update or modify a property inside of it
            return { ...state, isSignedin: true}
        case 'SIGN_OUT':
            return { ...state, isSignedin: false}

        default:
            return state;
    }

}