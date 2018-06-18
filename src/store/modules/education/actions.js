import api from '@/api/education';

export default {
  INIT_FIRST_LEVEL_STEPS ({ commit }) {
    return api.fetchFirstLevel()
      .then(steps => {
        commit('SET_FIRST_LEVEL_STEPS', steps);
      });
  },

  INIT_SECOND_LEVEL_STEPS ({ commit }) {
    return api.fetchSecondLevel()
      .then(steps => {
        commit('SET_SECOND_LEVEL_STEPS', steps);
      });
  },

  INIT_KNOWLEDGE_BASE ({ commit }) {
    return api.fetchSecondLevel()
      .then(base => {
        commit('SET_KNOWLEDGE_BASE', base);
      });
  },

};
