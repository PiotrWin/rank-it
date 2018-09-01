import React, { Component } from 'react';

import classes from './RankingCreator.scss';
import Aux from '../../hoc/Auxx';
import { capitalize } from '../../helpers/helpers';

class RankingCreator extends Component { 
  state = {
    rankingTypes: [
      'ranking',
      'ratings',
      'group'
    ],
    selectedRanking: 'ranking'
  };

  selectOptionChanged = event => {
    this.setState({ selectedRanking: event.target.value });
  };

  render() {
    const rankingOptions = this.state.rankingTypes.map((el, id) => (
      <option value={el} key={id}>{capitalize(el)}</option>
    ));

    return (
      <div className={classes.RankingCreator}>
        <h2>Create a ranking</h2>
        <select
          className={classes.TypeSelector}
          onChange={this.selectOptionChanged}>
          {rankingOptions}
        </select>
        <p>{capitalize(this.state.selectedRanking)}</p>
      </div>
    );
  }
}

export default RankingCreator;