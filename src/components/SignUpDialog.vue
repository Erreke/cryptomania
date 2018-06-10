<template>
  <div :class="{
        'modal fade': true,
        'modal-is-opened in': isSignUpDialogOpened
    }" @click.self="handleClose">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" aria-label="Close" @click="handleClose"><span
            aria-hidden="true">&times;</span></button>
          <h3 class="modal-title">Регистрация</h3>
        </div>
        <div class="modal-body">
          <sign-up-form></sign-up-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SignUpForm from '@/components/SignUpForm'

  export default {
    name: 'sign-up-dialog',

    components: {
      SignUpForm
    },

    computed: {
      ...mapState({
        isSignUpDialogOpened: state => state.auth.isSignUpDialogOpened,
      })
    },

    methods: {
      handleClose() {
        this.$store.commit('CLOSE_SIGN_UP_DIALOG')
      }
    }
  }
</script>
