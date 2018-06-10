import {
  checkAllConfirmations,
  saveUserAvatar,
  saveUserCurrentStep,
  saveUserPassword,
  saveUserProfile,
  sendRemittanceConfirmation
} from "@/api/user";

export default {
  UPDATE_USER_INFO: ({state, getters, commit}) => {
    commit('SET_USER_PROFILE_SAVING_PROCESS_STATUS', true);

    if (!getters.isProfileNotReadyToSave) {
      saveUserProfile(state.apiServerUrl, state.profileInfoForSave)
        .then((response) => {
          commit('SET_USER', Object.assign(state.user, response.data));
          commit('RESET_PROFILE_INFO_FOR_SAVE', false);
          commit('SET_USER_PROFILE_SAVING_PROCESS_STATUS', false);
        });
    }
  },

  UPDATE_USER_PASSWORD: ({state, commit}, payload) => {
    commit('SET_USER_PASSWORD_SAVING_PROCESS_STATUS', true);

    return saveUserPassword(state.apiServerUrl, payload);
  },

  SAVE_USER_AVATAR: ({state, commit}, payload) => {
    commit('SET_USER_AVATAR_SAVING_PROCESS_STATUS', true);

    saveUserAvatar(state.apiServerUrl, payload)
      .then((response) => {
        commit('SET_USER_AVATAR', response.data.avatar);
        commit('SET_AVATAR_SELECTED_STATUS', false);
        commit('SET_USER_AVATAR_SAVING_PROCESS_STATUS', false);
      });
  },

  COMPLETE_CURRENT_STEP: ({state, commit, dispatch}) => {
    commit('SET_USER_STEP_SAVING_PROCESS_STATUS', true);

    saveUserCurrentStep(state.apiServerUrl, state.currentLevel, state.user[`${state.currentLevel}LevelStep`])
      .then(() => {
        return new Promise((resolve) => {
          commit('SET_USER_STEP_SAVING_PROCESS_STATUS', false);
          resolve()
        }).then(dispatch('CLOSE_PLAYER')).then(commit('OPEN_NEXT_STEP'))
      });
  },

  SEND_REMITTANCE_CONFIRMATION: ({state, commit}, payload) => {
    commit('SET_REMITTANCE_CONFIRMATION_INFO', {
      sendingStatus: true,
      mentorId: payload.mentorId
    });

    sendRemittanceConfirmation(state.apiServerUrl, payload.mentorId)
      .then((response) => {
        commit('SET_USER_MENTORS_INFO', response.data);
        commit('SET_REMITTANCE_CONFIRMATION_INFO', {
          sendingStatus: false,
          mentorId: null
        });
      });
  },


  CHECK_ALL_CONFIRMATIONS: ({state, commit}, payload) => {
    commit('SET_CHECK_ALL_CONFIRMATIONS_PROCESS_INFO', {
      sendingStatus: true
    });

    if (state.user[`${state.currentLevel}LevelStep`] === payload.step - 1) {
      checkAllConfirmations(state.apiServerUrl)
        .then((response) => {
          commit('SET_USER_MENTORS_INFO', response.data);

          const confirmed = response.data.every((data) => {
            return data.confirmed
          });

          if (confirmed) {
            commit('OPEN_STEP', payload.step);
          }

          commit('SET_CHECK_ALL_CONFIRMATIONS_PROCESS_INFO', {
            sendingStatus: false
          });
        });

    } else {
      commit('SET_CHECK_ALL_CONFIRMATIONS_PROCESS_INFO', {
        sendingStatus: false
      });
    }
  },


}
