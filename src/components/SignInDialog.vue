<template>
  <div :class="{
        'modal fade': true,
        'modal-is-opened in': isSignInDialogOpened
    }" @click.self="handleClose">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" aria-label="Close" @click="handleClose"><span
            aria-hidden="true">&times;</span></button>
          <h3 class="modal-title">Вход</h3>
        </div>
        <div class="modal-body">
          <sign-in-form></sign-in-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SignInForm from '@/components/SignInForm'

  export default {
    name: 'sign-in-dialog',

    components: {
      SignInForm
    },

    computed: {
      ...mapState({
        isSignInDialogOpened: state => state.auth.isSignInDialogOpened,
      })
    },

    methods: {
      handleClose() {
        this.$store.commit('CLOSE_SIGN_IN_DIALOG')
      }
    }
  }
</script>
