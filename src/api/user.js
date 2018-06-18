import db from "@/firebase/init";

function composeUserProfile(user, userData) {
  return {
    // data from Firebase.Auth
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,

    // data from Firestore 'users' table
    avatar: userData.avatar,
    displayName: userData.displayName,
    firstLevelStep: userData.firstLevelStep,
    secondLevelStep: userData.secondLevelStep,
    facebook: userData.facebook,
    instagram: userData.instagram,
    mentor: userData.mentor,
    odnoklassniki: userData.odnoklassniki,
    phone: userData.phone,
    twitter: userData.twitter,
    vk: userData.vk,
    wallet: userData.wallet,
  }
}

function createUserProfile(user) {
  console.log(user);

  return db.collection('users').doc(user.uid).set({
    avatar: user.photoURL,
    displayName: user.displayName,
    firstLevelStep: 0,
    secondLevelStep: 0,
    facebook: '',
    instagram: '',
    mentor: '',
    odnoklassniki: '',
    phone: '',
    twitter: '',
    vk: '',
    wallet: '',
  });
}

function fetchUserData(uid) {
  return db.collection('users').doc(uid).get()
    .then(doc => {
      if (doc.exists) {
        return doc.data();
      } else {
        return {};
      }
    });
}

export default {
  composeUserProfile,
  createUserProfile,
  fetchUserData,
}