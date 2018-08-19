import * as actionTypes from './actionTypes';
import { auth } from '../../firebase';
import defaultState from '../defaultState';

const defaultUser = { ...defaultState.user };

export const showCurrentUser = user => {
  const currentUser = user || defaultUser;
  const provider = currentUser.providerData ? currentUser.providerData[0].providerId : '';
  console.log(user);
  return {
    type: actionTypes.SHOW_CURRENT_USER,
    user: {
      displayName: currentUser.displayName || currentUser.email,
      email: currentUser.email,
      emailVerified: currentUser.emailVerified,
      provider: provider,
      uid: currentUser.uid
    }
  };
};

export const getCurrentUser = () => {
  return dispatch => dispatch(showCurrentUser(auth.currentUser));
};