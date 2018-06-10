export default {
  loggedUser(state) {
    return state.profile;
  },
  isAuthenticated(state) {
    return !!state.profile;
  },
}
