<template>
    <div :class="{
        'modal fade': true,
        'modal-is-opened in': isRegistrationDialogOpened
    }" id="registration" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" @click="handleClose"><span aria-hidden="true">&times;</span></button>
                    <h3 class="modal-title">Регистрация</h3>
                </div>
                <div class="modal-body">
                    <registration-form></registration-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import RegistrationForm from '@/components/RegistrationForm'

  export default {
    name: 'registration-dialog',
    components: {
      RegistrationForm
    },
    computed: mapGetters([
      'isRegistrationDialogOpened'
    ]),
    methods: {
      handleClose () {
        this.$store.commit('CLOSE_REGISTRATION_DIALOG')
      }
    }
  }
</script>
