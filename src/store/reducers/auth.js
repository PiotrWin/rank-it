import * as actionTypes from '../actions/actionTypes';
import initialState from '../defaultState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.GET_CURRENT_USER:
    return {
      ...state,
      user: action.user
    };
  default:
    return state;
  }
};

export default reducer;