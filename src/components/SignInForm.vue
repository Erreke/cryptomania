<template>
  <form class="m-t-md" @submit.prevent="handleSubmit">


    <div class="form-group">
      <label for="sign-in-email">E-mail:</label>
      <input type="email" class="form-control mt1" placeholder="Введи свой емейл" name="email" id="sign-in-email"
             v-model="email" autocomplete="email" required>
    </div>

    <div class="form-group">
      <label for="sign-in-password">Пароль:</label>
      <input type="password" class="form-control mt1" placeholder="Введи свой пароль" name="password"
             id="sign-in-password" v-model="password" autocomplete="current-password" required>
    </div>

    <div class="form-group" v-if="signInError">
      <p class="text-danger">{{ signInError }}</p>
    </div>

    <div class="form-group">
      <button type="submit" :class="{'btn btn-success btn-block': true, 'ajax-loading': isSignInProcess}">Войти
      </button>
    </div>

    <router-link :to="{ name: 'PasswordResetPage' }" class="display-block text-center m-t-md">Забыл пароль?
    </router-link>

    <hr>

    <div class="form-group">
      <h4 class="text-center">Ты еще не участвуешь в проекте?</h4>
      <router-link :to="{ name: 'SignUpPage' }" class="btn btn-primary btn-block m-t-md ">Создай свой профиль
      </router-link>
    </div>
  </form>
</template>


<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'sign-in-form',

    data() {
      return {
        email: '',
        password: '',
      }
    },

    computed: {
      ...mapState({
        isSignInProcess: state => state.auth.isSignInProcess,
        signInError: state => state.auth.signInError,
      }),
    },

    methods: {
      ...mapActions({
        signInRequest: 'SIGN_IN_REQUEST'
      }),
      handleSubmit() {
        this.signInRequest({
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.$router.push({name: 'EducationFirstLevelPage'});
          });
      },
    },
  }
</script>
