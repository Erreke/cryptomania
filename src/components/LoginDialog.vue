<template>
    <div :class="{
        'modal fade': true,
        'modal-is-opened in': isLoginDialogOpened
    }" @click.self="handleClose">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" @click="handleClose"><span aria-hidden="true">&times;</span></button>
                    <h3 class="modal-title">Вход</h3>
                </div>
                <div class="modal-body">
                    <login-form></login-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LoginForm from '@/components/LoginForm'

  export default {
    name: 'login-dialog',
    components: {
      LoginForm
    },
    computed: mapGetters([
      'isLoginDialogOpened'
    ]),
    methods: {
      handleClose () {
        this.$store.commit('CLOSE_LOGIN_DIALOG')
      }
    }
  }
</script>
