import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import moduleAuth from './modules/auth';
import moduleUser from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: debug,
  modules: {
    auth: moduleAuth,
    user: moduleUser,
  }
});
