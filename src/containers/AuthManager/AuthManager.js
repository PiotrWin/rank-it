import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AuthManager.scss';
import Aux from '../../hoc/Auxx';
import { auth, authUI } from '../../firebase';
import { uiConfig } from '../../firebase/config';
import * as actionCreators from '../../store/actions/auth';
import * as firebaseHelpers from '../../firebase/helpers';

class AuthManager extends Component {

  componentDidMount() {
    authUI.start(`#${firebaseHelpers.authContainer}`, uiConfig);
    auth.onAuthStateChanged(user => {
      this.props.onGetCurrentUser(user ? user : null);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.displayName !== 'none' 
      && this.props.user.displayName === 'none') {
      firebaseHelpers.restartUI(authUI, `#${firebaseHelpers.authContainer}`);
    }
  }

  shouldComponentUpdate(prevProps) {
    return this.props.user.displayName !== prevProps.user.displayName;
  }

  signOut = () => this.props.onSignOut();

  log = () => {

  };

  render() {
    return (
      <Aux>
        <div id={firebaseHelpers.authContainer}></div>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: user => dispatch(actionCreators.getCurrentUser(user)),
  onSignOut: () => dispatch(actionCreators.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthManager);