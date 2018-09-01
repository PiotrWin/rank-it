import defaultPhoto from '../assets/images/person.svg';

const defaultState = {
  signedIn: false,
  user: {
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: defaultPhoto,
    provider: '',
    uid: null
  }
};

export default defaultState;