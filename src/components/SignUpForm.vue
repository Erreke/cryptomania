<template>
  <form class="m-t-md" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="sign-up-email">E-Mail:</label>
      <input type="email" class="form-control mt1" name="email" id="sign-up-email"
             placeholder="Укажи адрес электронной почты" v-model="email" autocomplete="email" required>
    </div>

    <div class="form-group">
      <label for="sign-up-password">Пароль:</label>
      <input type="password" class="form-control mt1" name="password" id="sign-up-password"
             placeholder="Придумай пароль" v-model="password" autocomplete="new-password" required>
    </div>

    <div class="form-group" v-if="signUpError">
      <p class="text-danger">{{ signUpError }}</p>
    </div>

    <input type="hidden" class="form-control" name="mentor_id" v-model="mentorId">

    <div class="form-group">
      <button type="submit" :class="{'btn btn-success btn-block': true, 'ajax-loading': isSignUpProcess}">
        Регистрация
      </button>
    </div>

    <hr>

    <div class="form-group">
      <h4 class="text-center">Уже участвуешь в проекте?</h4>
      <router-link :to="{ name: 'SignInPage' }" class="btn btn-primary btn-block m-t-xs">Войди в свой профиль
      </router-link>
    </div>
  </form>
</template>


<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'sign-up-form',

    data() {
      return {
        email: '',
        password: '',
        mentorId: '',
      }
    },

    computed: {
      ...mapState({
        isSignUpProcess: state => state.auth.isSignUpProcess,
        signUpError: state => state.auth.signUpError,
      }),
    },

    methods: {
      ...mapActions({
        signUpRequest: 'SIGN_UP_REQUEST',
      }),
      handleSubmit() {
        this.signUpRequest({
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.$router.push({name: 'EducationFirstLevelPage'});
          });
      }
    }
  }
</script>
