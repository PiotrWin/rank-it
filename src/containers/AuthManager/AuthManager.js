import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AuthManager.scss';
import Aux from '../../hoc/Auxx';
import { auth, authUI } from '../../firebase';
import { uiConfig } from '../../firebase/config';
import * as actionCreators from '../../store/actions/auth';

class AuthManager extends Component {
  componentDidMount() {
    authUI.start('#firebase-auth-container', uiConfig);
    auth.onAuthStateChanged(user => (
      this.props.onGetCurrentUser(user ? user : null)
    ));
  }

  signOut = () => {
    this.props.onSignOut();
    console.log(authUI);
    authUI.start('#firebase-auth-container', uiConfig);
  };

  log = () => {

  };

  render() {
    return (
      <Aux>
        <div>
          User: {this.props.user.displayName}
        </div>
        <button onClick={this.signOut}>Sign out</button>
        <button onClick={this.log}>Log</button>
        <button 
          onClick={() => this.props.onGetCurrentUser(auth.currentUser)}>
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
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: user => dispatch(actionCreators.getCurrentUser(user)),
    onSignOut: () => dispatch(actionCreators.signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthManager);