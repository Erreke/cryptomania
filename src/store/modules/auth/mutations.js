export default {
  OPEN_SIGN_UP_DIALOG(state) {
    state.isSignUpDialogOpened = true
  },

  CLOSE_SIGN_UP_DIALOG(state) {
    state.isSignUpDialogOpened = false
  },

  OPEN_SIGN_IN_DIALOG: (state) => {
    state.isSignInDialogOpened = true
  },

  CLOSE_SIGN_IN_DIALOG: (state) => {
    state.isSignInDialogOpened = false
  },

  SET_SIGN_UP_PROCESS(state, payload) {
    state.isSignUpProcess = payload
  },

  SET_SIGN_IN_PROCESS(state, payload) {
    state.isSignInProcess = payload
  },

  SET_PASSWORD_RESET_PROCESS(state, payload) {
    state.isPasswordResetProcess = payload
  },

  SET_SIGN_UP_ERROR(state, error) {
    state.signUpError = error;
  },

  SET_SIGN_IN_ERROR(state, error) {
    state.signInError = error;
  },

  SET_PASSWORD_RESET_ERROR(state, error) {
    state.passwordResetError = error;
  },

}
