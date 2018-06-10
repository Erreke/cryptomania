import firebase from 'firebase';

export default {
  SIGN_UP_REQUEST: ({commit}, {email, password}) => {
    commit('SET_SIGN_UP_PROCESS', true);

    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        commit('SET_USER', user);
        commit('SET_SIGN_UP_PROCESS', false);
      })
      .catch((error) => {
        commit('UNSET_USER');
        commit('SET_SIGN_UP_PROCESS', false);

        switch (error.code) {

          case 'auth/email-already-in-use':
            commit('SET_SIGN_UP_ERROR', 'Пользователь с такой электронной почтой уже зарегистрирован...');
            break;

          case 'auth/invalid-email':
            commit('SET_SIGN_UP_ERROR', 'Не правильный адрес электронной почты...');
            break;

          case 'auth/operation-not-allowed':
            commit('SET_SIGN_UP_ERROR', 'Операция недоступна...');
            break;

          case 'auth/weak-password':
            commit('SET_SIGN_UP_ERROR', 'Очень слабый пароль...');
            break;

          default:
            commit('SET_SIGN_UP_ERROR', 'Произошла неизвестная ошибка...');
            break;
        }
      });
  },

  SIGN_IN_REQUEST: ({commit}, {email, password}) => {
    commit('SET_SIGN_IN_PROCESS', true);

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        commit('SET_USER', user);
        commit('SET_SIGN_IN_PROCESS', false);
      })
      .catch((error) => {
        commit('UNSET_USER');
        commit('SET_SIGN_IN_PROCESS', false);

        switch (error.code) {
          case 'auth/wrong-password':
            commit('SET_SIGN_IN_ERROR', 'Не правильный логин или пароль...');
            break;

          case 'auth/user-not-found':
            commit('SET_SIGN_IN_ERROR', 'Пользователь с такой электронной почтой не найден...');
            break;

          case 'auth/user-disabled':
            commit('SET_SIGN_IN_ERROR', 'Пользователь заблокирован...');
            break;

          default:
            commit('SET_SIGN_IN_ERROR', 'Произошла неизвестная ошибка...');
            break;
        }
      });
  },

  SIGN_OUT_REQUEST: ({commit}) => {
    return firebase.auth().signOut()
      .then(() => {
        commit('UNSET_USER');
      });
  },

  PASSWORD_RESET_REQUEST: ({commit}, email) => {
    commit('SET_PASSWORD_RESET_PROCESS', true);
    
    return firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        commit('SET_PASSWORD_RESET_MESSAGE', 'Мы отправили Вам письмо со ссылкой для сброса пароля. Пройдите по ссылке и следуйте дальнейшим указаниям.');
        commit('SET_PASSWORD_RESET_PROCESS', false);
      })
      .catch((error) => {
        commit('SET_PASSWORD_RESET_PROCESS', false);

        switch (error.code) {
          case 'auth/invalid-email':
            commit('SET_PASSWORD_RESET_ERROR','Не правильный адрес электронной почты...');
            break;

          case 'auth/user-not-found':
            commit('SET_PASSWORD_RESET_ERROR','Пользователь с такой электронной почтой не найден...');
            break;

          default:
            commit('SET_PASSWORD_RESET_ERROR','Произошла неизвестная ошибка...');
            break;
        }
      });
  },
}
