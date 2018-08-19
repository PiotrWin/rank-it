import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AuthManager.scss';
import Aux from '../../hoc/Auxx';
import { auth, authUI } from '../../firebase';
import { uiConfig } from '../../firebase/config';
import * as actionCreators from '../../store/actions/auth';

class AuthManager extends Component {
  state = {
    authenticated: false,
    user: 'none'
  };

  componentDidMount() {
    // this.setState({ user: auth.currentUser() });
    // console.log(auth.currentUser());
    authUI.start('#firebase-auth-container', uiConfig);
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('logged: ', user);
      }
      else {
        console.log('logged out: ', user);
      }
    });
  }


  signInTest = () => {
    auth.signInWithEmailAndPassword('test2@test.com', 'testpass')
      .then(response => {
        // this.setState({ user: response.user.email });
      })
      .catch(error => {
        console.log(error);
      });
  }

  signOut = () => {
    auth.signOut();
  }

  log = () => {
    console.log('user: ', auth.currentUser);
  }

  render() {
    return (
      <Aux>
        <div>
          User: {this.state.user}
        </div>
        <button onClick={this.signInTest}>Sign in test</button>
        <button onClick={this.signOut}>Sign out</button>
        <button onClick={this.log}>Log</button>
        <button 
          onClick={this.props.onGetCurrentUser}>
        getCurrentUser
        </button>
        <div id="firebase-auth-container"></div>
        <div>{JSON.stringify(this.props.user)}</div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: () => dispatch(actionCreators.getCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthManager);