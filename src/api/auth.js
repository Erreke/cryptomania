import firebase from 'firebase';

function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signOut() {
  return firebase.auth().signOut();
}

function signInByProvider(provider) {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();

  return firebase.auth().signInWithPopup(authProvider);
}

function sendPasswordResetEmail(email) {
  return firebase.auth().sendPasswordResetEmail(email);
}

export default {
  signUp,
  signIn,
  signOut,
  signInByProvider,
  sendPasswordResetEmail,
}