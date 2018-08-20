import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAcW4U85hNJCfyAPAgk43fV8eIutZ2V-qg',
  authDomain: 'rank-it-97a89.firebaseapp.com',
  databaseURL: 'https://rank-it-97a89.firebaseio.com',
  projectId: 'rank-it-97a89',
  storageBucket: 'rank-it-97a89.appspot.com',
  messagingSenderId: '390314849800'
};

const authConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      return false;
    },
    uiShown: () => {
      // console.log('uiShown');
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/creator',
  signInOptions: authConfig.signInOptions
};

export { authConfig, firebaseConfig, uiConfig };

