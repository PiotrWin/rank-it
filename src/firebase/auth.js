import firebase from './firebase';
import firebaseui from 'firebaseui';

if (!firebase.apps.length) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

const auth = firebase.auth();
const authUI = new firebaseui.auth.AuthUI(auth);

export { auth, authUI };