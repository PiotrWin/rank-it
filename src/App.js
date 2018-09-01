import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import classes from './App.scss';
import RankingCreator from './containers/RankingCreator/RankingCreator';
import AuthManager from './containers/AuthManager/AuthManager';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <div className={classes.AppContent}>
          <Switch>
            <Route path="/creator" component={RankingCreator} />
            <Route path="/login" component={AuthManager} />
            <Route path="/" component={RankingCreator} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
