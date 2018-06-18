import firebase from 'firebase';
import 'firebase/firestore';

const firestoreApp = firebase.initializeApp({
  apiKey: 'AIzaSyA6qbciWron2B7KIMw2Vsx0_PTDoCxxM0k',
  authDomain: 'cryptomania-4320b.firebaseapp.com',
  databaseURL: 'https://cryptomania-4320b.firebaseio.com',
  projectId: 'cryptomania-4320b',
  storageBucket: 'cryptomania-4320b.appspot.com',
  messagingSenderId: '560475980939'
});

const firestore = firestoreApp.firestore();

const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

window.$firestore = firestore;

export default firestore;