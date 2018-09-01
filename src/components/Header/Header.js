import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/auth';
import * as firebaseHelpers from '../../firebase/helpers';
import { auth } from '../../firebase';

import classes from './Header.scss';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';

class Header extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.onGetCurrentUser(user ? user : null);
    });
  }

  render() {
    let buttonAction;
    let buttonText;
    if (this.props.user.displayName === '') {
      buttonAction = () => { // @TODO: sign in
        console.log('Sign in');
      };
      buttonText = 'Sign in';
    }
    else {
      buttonAction = this.props.onSignOut;
      buttonText = 'Sign out';
    }
    return (
      <div className={classes.Header}>
        <Navigation />
        <UserInfo 
          userName={this.props.user.displayName}
          photoURL={this.props.user.photoURL} 
        />
        <button
          className={classes.Button}
          onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: user => dispatch(actionCreators.getCurrentUser(user)),
  onSignOut: () => dispatch(actionCreators.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Header);