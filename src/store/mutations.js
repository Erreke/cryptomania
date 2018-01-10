export default {
    SET_USER_PROFILE_SAVING_PROCESS_STATUS: (state, isSaving) => (
        state.isUserProfileSavingProcess = isSaving
    ),

    SET_USER_PASSWORD_SAVING_PROCESS_STATUS: (state, isSaving) => (
        state.isUserPasswordSavingProcess = isSaving
    ),

    SET_USER_PASSWORD_RESETTING_PROCESS_STATUS: (state, isSaving) => (
        state.isUserPasswordResettingProcess = isSaving
    ),

    SET_USER_AVATAR_SAVING_PROCESS_STATUS: (state, isSaving) => (
        state.isUserAvatarSavingProcess = isSaving
    ),

    RESET_PROFILE_INFO_FOR_SAVE: (state) => (
        state.profileInfoForSave = null
    ),

    SET_USER_STEP_SAVING_PROCESS_STATUS: (state, isSaving) => (
        state.isUserStepSavingProcess = isSaving
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

    SET_USER_MENTORS_INFO: (state, mentors) => {
        state.user.mentors = mentors
    },

    PREPARE_USER_INFO_FOR_SAVE: (state, e) => {
        const fieldName = e.target.id;

        if(state.profileInfoForSave === null) {
            state.profileInfoForSave = {};
        }

        state.profileInfoForSave[fieldName] = e.target.value;
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

    OPEN_LOGIN_DIALOG: (state) => {
        state.isLoginDialogOpened = true
    },

    CLOSE_LOGIN_DIALOG: (state) => {
        state.isLoginDialogOpened = false
    },

    OPEN_REGISTRATION_DIALOG: (state) => {
        state.isRegistrationDialogOpened = true
    },

    CLOSE_REGISTRATION_DIALOG: (state) => {
        state.isRegistrationDialogOpened = false
    },

    SET_USER(state, user) {
        state.user = user
    },

    SET_USER_AVATAR(state, avatar) {
        state.user.avatar = avatar
    },

    SET_AVATAR_SELECTED_STATUS(state, isSelected) {
        state.isAvatarSelectedToUpload = isSelected
    },

    UNSET_USER(state) {
        state.user = null
    },

    SET_AUTHORIZATION_PROCESS(state, payload) {
        state.isAuthorizationProcess = payload
    },

    SET_REGISTRATION_PROCESS(state, payload) {
        state.isRegistrationProcess = payload
    },

    fireServerError(state, err) {
        state.serverError = err || true;
    },
    clearServerError(state) {
        state.serverError = false;
    },

    setUser(state) {
        console.log('setUser')
    }
}
