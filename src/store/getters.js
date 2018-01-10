export default {
    apiServerUrl(state) {
        return state.apiServerUrl
    },
    firstLevelSteps(state) {
        return state.firstLevelSteps
    },
    firstLevelStepsCount(state) {
        return state.firstLevelSteps.length
    },
    secondLevelSteps(state) {
        return state.secondLevelSteps
    },
    secondLevelStepsCount(state) {
        return state.secondLevelSteps.length
    },
    thirdLevelSteps(state) {
        return state.thirdLevelSteps
    },
    thirdLevelStepsCount(state) {
        return state.thirdLevelSteps.length
    },
    currentVideoID(state) {
        return state.currentVideoID
    },
    isPlayerOpened(state) {
        return state.isPlayerOpened
    },
    isSidebarSmall(state) {
        return state.isSidebarSmall
    },
    isSidebarVisible(state) {
        return state.isSidebarVisible
    },
    isUserStepSavingProcess(state) {
        return state.isUserStepSavingProcess
    },
    isUserProfileSavingProcess(state) {
        return state.isUserProfileSavingProcess
    },
    isUserAvatarSavingProcess(state) {
        return state.isUserAvatarSavingProcess
    },
    isUserPasswordSavingProcess(state) {
        return state.isUserPasswordSavingProcess
    },
    isUserPasswordResettingProcess(state) {
        return state.isUserPasswordResettingProcess
    },
    isAvatarSelectedToUpload(state) {
        return state.isAvatarSelectedToUpload
    },
    remittanceConfirmationSendingProcessInfo(state) {
        return state.remittanceConfirmationSendingProcessInfo
    },
    checkAllConfirmationsProcessInfo(state) {
        return state.checkAllConfirmationsProcessInfo.sendingStatus
    },
    QRCodeShowingProcessInfo(state) {
        return state.QRCodeShowingProcessInfo
    },
    isAuthenticated(state) {
        return !!state.user
    },
    loggedUser(state) {
        return state.user
    },
    profileInfoForSave(state) {
        return state.profileInfoForSave
    },
    isProfileNotReadyToSave(state) {
        return state.profileInfoForSave === null;
    },
    isLoginDialogOpened(state) {
        return state.isLoginDialogOpened
    },
    isRegistrationDialogOpened(state) {
        return state.isRegistrationDialogOpened
    },
    isAuthorizationProcess(state) {
        return state.isAuthorizationProcess
    },
    isRegistrationProcess(state) {
        return state.isRegistrationProcess
    },
    serverError: state => state.serverError,
    user: state => state.user
}
