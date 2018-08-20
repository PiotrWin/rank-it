import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxx';
import * as actionCreators from '../../store/actions/auth';
import { auth } from '../../firebase';

class Header extends Component {

  componentDidMount() {
    auth.onAuthStateChanged(user => (
      this.props.onGetCurrentUser(user ? user : null)
    ));
  }

  render() {
    return (
      <Aux>
        <div>Logged user: {this.props.user.displayName}</div>
        <button onClick={this.props.onSignOut}>Sign out</button>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: user => dispatch(actionCreators.getCurrentUser(user)),
    onSignOut: () => dispatch(actionCreators.signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);