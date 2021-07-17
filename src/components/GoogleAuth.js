import React from 'react';

class GoogleAuth extends React.Component {
    //render client id once
    componentDidMount(){
        //the below information is just to inialize the library
        //gapi is a varaible thats available in the window scope inside of our
        //browser
        //two params initlize with our client ID
        //scope is represents the varaibles that we want acces too from the user
        //for us we want an email to function the app correctly
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientID: '182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com',
                scope: 'email'
            });
        });

    }
    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;