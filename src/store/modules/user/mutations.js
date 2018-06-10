export default {
  SET_USER (state, user) {
    state.profile = {
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      wallet: user.wallet,
      odnoklassniki: user.odnoklassniki,
      instagram: user.instagram,
      facebook: user.facebook,
      vk: user.vk,
      google: user.google,
      twitter: user.twitter,
      firstLevelStep: user.firstLevelStep,
      secondLevelStep: user.secondLevelStep,
      mentor: user.mentor,
    }
  },

  UNSET_USER (state) {
    state.profile = null
  },

  PREPARE_USER_INFO_FOR_SAVE: (state, e) => {
    const fieldName = e.target.id;

    if (state.profileInfoForSave === null) {
      state.profileInfoForSave = {};
    }

    state.profileInfoForSave[fieldName] = e.target.value;
  },
}
