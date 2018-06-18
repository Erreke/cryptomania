import api from '@/api/user';

export default {
  INIT_USER({commit}, user) {
    return api.fetchUserData(user.uid)
      .then((userData) => {
        console.log(userData);
        commit('SET_USER', api.composeUserProfile(user, userData));
      });
  }
}
