import authAPI from '@/api/auth';
import userAPI from '@/api/user';

export default {
  SIGN_UP_REQUEST: ({commit}, {email, password}) => {
    commit('SET_SIGN_UP_PROCESS', true);

    return authAPI.signUp(email, password)
      .then((user) => {

        return userAPI.createUserProfile(user)
          .then(() => {
            const userProfile = userAPI.composeUserProfile(user, {});

            commit('user/SET_USER', userProfile, {root: true});
            commit('CLEAR_SIGN_UP_ERROR');
            commit('CLEAR_SIGN_IN_ERROR');
            commit('CLEAR_PASSWORD_RESET_ERROR');
          })
          .catch((error) => {
            commit('SET_SIGN_UP_ERROR', 'Произошла неизвестная ошибка...');
            console.error(error);
          });

      })
      .catch((error) => {
        commit('user/UNSET_USER', null, {root: true});

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
      })
      .then(() => {
        commit('SET_SIGN_UP_PROCESS', false);
      });
  },

  SIGN_IN_REQUEST: ({commit}, {email, password}) => {
    commit('SET_SIGN_IN_PROCESS', true);

    return authAPI.signIn(email, password)
      .then(() => {
        //commit('user/SET_USER', user, {root: true});
        commit('SET_SIGN_IN_PROCESS', false);
        commit('CLOSE_SIGN_IN_DIALOG');
        commit('CLEAR_SIGN_UP_ERROR');
        commit('CLEAR_SIGN_IN_ERROR');
        commit('CLEAR_PASSWORD_RESET_ERROR');
      })
      .catch((error) => {
        commit('user/UNSET_USER', null, {root: true});
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
            commit('SET_SIGN_IN_ERROR', 'Произошла неизвестная ошибка... Повторите попытку позднее.');
            break;
        }
      });
  },

  SIGN_OUT_REQUEST: ({commit}) => {
    return authAPI.signOut()
      .then(() => {
        commit('user/UNSET_USER', null, {root: true});
      });
  },

  PASSWORD_RESET_REQUEST: ({commit}, email) => {
    commit('SET_PASSWORD_RESET_PROCESS', true);

    return authAPI.sendPasswordResetEmail(email)
      .then(() => {
        commit('SET_PASSWORD_RESET_MESSAGE', 'Мы отправили Вам письмо со ссылкой для сброса пароля. Пройдите по ссылке и следуйте дальнейшим указаниям.');
        commit('SET_PASSWORD_RESET_PROCESS', false);
      })
      .catch((error) => {
        commit('SET_PASSWORD_RESET_PROCESS', false);

        switch (error.code) {
          case 'auth/invalid-email':
            commit('SET_PASSWORD_RESET_ERROR', 'Не правильный адрес электронной почты...');
            break;

          case 'auth/user-not-found':
            commit('SET_PASSWORD_RESET_ERROR', 'Пользователь с такой электронной почтой не найден...');
            break;

          default:
            commit('SET_PASSWORD_RESET_ERROR', 'Произошла неизвестная ошибка...');
            break;
        }
      });
  },

  SIGN_IN_BY_PROVIDER_REQUEST: ({commit}, provider) => {
    return authAPI.signInByProvider(provider)
      .then((result) => {
        const user = result.user;

        userAPI.createUserProfile(user)
          .then(() => {
            const userProfile = userAPI.composeUserProfile(user, {
              displayName: user.displayName,
              avatar: user.photoURL,
            });

            commit('user/SET_USER', userProfile, {root: true});
            commit('SET_SIGN_IN_PROCESS', false);
            commit('CLEAR_SIGN_UP_ERROR');
            commit('CLEAR_SIGN_IN_ERROR');
            commit('CLEAR_PASSWORD_RESET_ERROR');
          })
          .catch((error) => {
            commit('SET_SIGN_UP_ERROR', 'Произошла неизвестная ошибка...');
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
        console.log('email', email);
        console.log('credential', credential);
      })
      .then(() => {
        commit('SET_SIGN_IN_PROCESS', false);
      });

  }
}
