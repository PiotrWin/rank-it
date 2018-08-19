import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import classes from './App.scss';
import RankingCreator from './containers/RankingCreator/RankingCreator';
import AuthManager from './containers/AuthManager/AuthManager';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/login" component={AuthManager} />
          <Route path="/creator" component={RankingCreator} />
          <Redirect from="/" to="/creator" />
        </Switch>
      </div>
    );
  }
}

export default App;
