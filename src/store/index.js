import Vue from 'vue';
import Vuex from 'vuex';

import moduleAuth from './modules/auth';
import moduleEducation from './modules/education';
import moduleUser from './modules/user';
import moduleUI from './modules/ui';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  modules: {
    auth: moduleAuth,
    education: moduleEducation,
    user: moduleUser,
    ui: moduleUI,
  },
});
