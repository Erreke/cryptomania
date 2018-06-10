import db from '../firebase/init';

import {
  playVideo,
  stopVideo
} from '../api/video'

import {
  generateQrCode
} from '../api/qrcode'

export default {

  /**
   * UNDER CONSTRUCTIONS
   */

  INIT_DATA: ({commit}) => {
    const steps = [];

    db.collection('level-first').get()
      .then(snapshot => {

        console.log('snapshot', snapshot);

        snapshot.forEach(doc => {
          const step = doc.data();
          step.id = doc.id;
          steps.push(step);
          console.log('step', step);
        })
      })
      .then(() => {
        console.log('steps', steps);
        commit('SET_FIRST_LEVEL_STEPS', steps);
      })
  },

  OPEN_PLAYER: ({state, commit, dispatch}, payload) => {
    commit('SET_CURRENT_VIDEO_ID', payload.videoID);
    commit('SET_CURRENT_VIDEO_STEP', payload.step);

    stopVideo()
      .then(playVideo(state.currentVideoID, state.currentVideoStep, state.user[`${state.currentLevel}LevelStep`], dispatch)
        .then(commit('SET_IS_PLAYER_OPENED_STATUS', true)))
  },

  CLOSE_PLAYER: ({commit}) => {
    commit('SET_CURRENT_VIDEO_ID', null);
    commit('SET_CURRENT_VIDEO_STEP', null);

    stopVideo()
      .then(commit('SET_IS_PLAYER_OPENED_STATUS', false))
  },

  SHOW_QR_CODE: ({commit}, payload) => {
    commit('SET_QR_CODE_SHOWING_PROCESS_INFO', {
      sendingStatus: true,
      mentorId: payload.mentorId
    });

    generateQrCode(payload.wallet, payload.mentorId)
      .then(commit('SET_QR_CODE_SHOWING_PROCESS_INFO', {
        sendingStatus: false,
        mentorId: null
      }));
  },

  CLOSE_QR_CODE: ({}, payload) => {
    const qrDialog = document.querySelector(`#qr-code-container-${payload.mentorId}`);
    const qrContainer = document.querySelector(`#qr-code-container-${payload.mentorId} .modal-body`);

    qrContainer.innerHTML = '';
    qrDialog.style.display = 'none';
  },
}
