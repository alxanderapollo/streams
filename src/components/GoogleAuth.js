
import React from 'react';
class GoogleAuth extends React.Component {
//null because we dont know if the user is signed in or not when the app loads
  state = { isSignedIn: null };

  componentDidMount() {
        //the below information is just to inialize the library
        //gapi is a varaible thats available in the window scope inside of our
        //browser
        //two params initlize with our client ID
        //scope is represents the varaibles that we want acces too from the user
        //for us we want an email to function the app correctly
        //init chains on a promise 
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
        ///updates our level compoennt with this.auth OBJ
          this.auth = window.gapi.auth2.getAuthInstance();
        //   this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //get authentication status
        this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  } 
  //called everytime the user status changes
    onAuthChange = () => {
        //this.auth object is what refrences the users object
        this.setState({ isSignedIn:this.auth.isSignedIn.get()})

    }

    //helper method to let us know whether the user isgned in or not 
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
