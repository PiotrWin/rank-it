import React, { Component } from 'react';

class AuthManager extends Component {
  state = {
    authenticated: false,
  }

  render() {
    return (
      <div>
        Authenticated: {this.state.authenticated.toString()}
      </div>
    );
  }
}

export default AuthManager;