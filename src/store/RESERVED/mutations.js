export default {


  SET_USER_PROFILE_SAVING_PROCESS_STATUS: (state, isSaving) => (
    state.isUserProfileSavingProcess = isSaving
  ),

  SET_USER_PASSWORD_SAVING_PROCESS_STATUS: (state, isSaving) => (
    state.isUserPasswordSavingProcess = isSaving
  ),


  SET_USER_AVATAR_SAVING_PROCESS_STATUS: (state, isSaving) => (
    state.isUserAvatarSavingProcess = isSaving
  ),

  SET_USER_MENTORS_INFO: (state, mentors) => {
    state.user.mentors = mentors
  },

  SET_USER_STEP_SAVING_PROCESS_STATUS: (state, isSaving) => (
    state.isUserStepSavingProcess = isSaving
  ),


  SET_USER_AVATAR(state, avatar) {
    state.user.avatar = avatar
  },

  RESET_PROFILE_INFO_FOR_SAVE: (state) => (
    state.profileInfoForSave = null
  ),

  SET_CURRENT_VIDEO_ID: (state, videoID) => (
    state.currentVideoID = videoID
  ),

  SET_CURRENT_VIDEO_STEP: (state, videoStep) => (
    state.currentVideoStep = videoStep
  ),

  SET_CURRENT_LEVEL: (state, level) => (
    state.currentLevel = level
  ),

  SET_IS_PLAYER_OPENED_STATUS: (state, status) => {
    state.isPlayerOpened = status
  },

  SET_REMITTANCE_CONFIRMATION_INFO: (state, payload) => {
    state.remittanceConfirmationSendingProcessInfo = {
      sendingStatus: payload.sendingStatus,
      mentorId: payload.mentorId
    }
  },

  SET_QR_CODE_SHOWING_PROCESS_INFO: (state, payload) => {
    state.QRCodeShowingProcessInfo = {
      sendingStatus: payload.sendingStatus,
      mentorId: payload.mentorId
    }
  },

  SET_CHECK_ALL_CONFIRMATIONS_PROCESS_INFO: (state, payload) => {
    state.checkAllConfirmationsProcessInfo = {
      sendingStatus: payload.sendingStatus
    }
  },

  OPEN_NEXT_STEP: (state) => {
    state.user[`${state.currentLevel}LevelStep`] += 1
  },

  OPEN_STEP: (state, payload) => {
    state.user[`${state.currentLevel}LevelStep`] = payload
  },

  TOGGLE_SIDEBAR_VISIBLE: (state) => {
    state.isSidebarVisible = !state.isSidebarVisible
    state.isSidebarSmall = false
  },

  HIDE_SIDEBAR: (state) => {
    state.isSidebarVisible = false
  },

  TOGGLE_SIDEBAR_SIZE: (state) => {
    state.isSidebarSmall = !state.isSidebarSmall
  },

  TOGGLE_MENU_ITEM_EDUCATION: (state) => {
    state.isMenuItemEducationOpened = !state.isMenuItemEducationOpened
  },


  SET_AVATAR_SELECTED_STATUS(state, isSelected) {
    state.isAvatarSelectedToUpload = isSelected
  },

  fireServerError(state, err) {
    state.serverError = err || true;
  },
  clearServerError(state) {
    state.serverError = false;
  },

}
