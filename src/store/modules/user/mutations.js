export default {
  SET_USER (state, user) {
    console.log(user);

    state.profile = user
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
