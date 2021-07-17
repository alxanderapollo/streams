//gapi documentation
import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions'
class GoogleAuth extends React.Component {
//null because we dont know if the user is signed in or not when the app loads

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
          //at initlization, we check the users current status 
          this.onAuthChange(this.auth.isSignedIn.get())
          //wait to see if user status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  } 
  //called everytime the user status changes
    onAuthChange = isSignedIn => {
        //this.auth object is what refrences the users object
        // this.setState({ isSignedIn:this.auth.isSignedIn.get()})
        //Redux
        if(isSignedIn){
            //gets the id of the user that is signed in
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }

    }

    //button Functionality
    onSignInClick = () => {
        this.auth.signIn();

    }
    onSignOutClick = () => {
        this.auth.signOut();
        
    }

    //helper method to let us know whether the user isgned in or not 
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (<button onClick={this.onSignOutClick} className="ui red google button">
          <i className=" google icon">
            Sign Out
          </i>
          </button>
          );
    } else {
        return (<button onClick={this.onSignInClick} className="ui red google button">
        <i className=" google icon">
          Sign In
        </i>
        </button>);
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {isSignedIn:state.auth.isSignedIn}

}


//connecting our actions to this component
//since we currently dont have a map to state function we pass null
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
