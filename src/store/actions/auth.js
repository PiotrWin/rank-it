import * as actionTypes from './actionTypes';
import { auth } from '../../firebase';
import defaultState from '../defaultState';

const defaultUser = { ...defaultState.user };

export const getCurrentUser = user => {
  const currentUser = user || defaultUser;
  const provider = currentUser.providerData ? currentUser.providerData[0].providerId : '';
  return {
    type: actionTypes.GET_CURRENT_USER,
    user: {
      displayName: currentUser.displayName || currentUser.email,
      email: currentUser.email,
      emailVerified: currentUser.emailVerified,
      photoURL: currentUser.photoURL,
      provider: provider,
      uid: currentUser.uid
    }
  };
};

export const signOut = () => {
  return dispatch => {
    auth.signOut()
      .then(() => dispatch(getCurrentUser()))
      .catch(error => console.log(error));
  };
};
// export const getCurrentUser = () => {
//   return dispatch => dispatch(showCurrentUser(auth.currentUser));
// };