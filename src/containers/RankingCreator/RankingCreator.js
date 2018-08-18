import React, { Component } from 'react';

import classes from './RankingCreator.scss';
import Aux from '../../hoc/Auxx';

class RankingCreator extends Component { 
  state = {
    rankingType: 'ranking',
  }

  render() {
    return (
      <Aux>
        <div>
          Ranking type: {this.state.rankingType}
        </div>
      </Aux>
    );
  }
}

export default RankingCreator;