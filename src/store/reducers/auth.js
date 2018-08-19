import * as actionTypes from '../actions/actionTypes';
import initialState from '../defaultState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SHOW_CURRENT_USER:
    console.log('show');
    return {
      ...state,
      user: action.user
    };
  default:
    return state;
  }
};

export default reducer;