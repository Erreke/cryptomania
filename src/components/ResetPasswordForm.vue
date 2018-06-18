<template>
  <form class="m-t-md" @submit.prevent="handleSubmit">

    <div class="form-group">
      <label for="email">E-mail:</label>
      <input type="email" class="form-control mt1" placeholder="Введи свой емейл" name="email" id="email"
             v-model="email">
    </div>

    <div class="form-group" v-if="passwordResetError">
      <p class="text-danger">{{ passwordResetError }}</p>
    </div>

    <div class="form-group" v-if="passwordResetMessage">
      <p class="text-danger">{{ passwordResetMessage }}</p>
    </div>

    <div class="form-group">
      <button type="submit" :class="['btn btn-success btn-block', {'ajax-loading': isPasswordResetProcess}]">
        Сбросить
      </button>

      <router-link :to="{ name: 'MainPage' }" class="btn btn-default btn-block m-t-md">Отмена</router-link>
    </div>

  </form>

</template>


<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'reset-password-form',
    
    data() {
      return {
        email: null
      }
    },

    computed: {
      ...mapState('auth', {
        isPasswordResetProcess: state => state.isPasswordResetProcess,
        passwordResetError: state => state.passwordResetError,
        passwordResetMessage: state => state.passwordResetMessage,
      }),
    },

    methods: {
      ...mapActions('auth', {
        passwordResetRequest: 'PASSWORD_RESET_REQUEST'
      }),
      handleSubmit() {
        this.passwordResetRequest(this.email)
          .then(() => {
            // this.$router.push({name: 'EducationFirstLevelPage'});
          });
      },
    },
  }
</script>
