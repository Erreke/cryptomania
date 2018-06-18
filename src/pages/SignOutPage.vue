<template>
  <light-layout>
    <div class="sign-out">Выходим...</div>
  </light-layout>
</template>

<script>
  import { mapActions } from 'vuex';
  import LightLayout from '@/layouts/light'

  export default {
    name: 'SignOutPage',

    metaInfo: {
      title: 'Выход'
    },

    components: {
      LightLayout
    },

    methods: {
      ...mapActions('auth', {
        signOutRequest: 'SIGN_OUT_REQUEST'
      }),
      signOut() {
        this.signOutRequest()
          .then(() => {
            this.$router.push({name: 'MainPage'});
          });
      },
    },

    mounted() {
      this.signOut();
    }
  }
</script>

<style>
  .sign-out {
    background: url(../assets/i/blocks/loader/loader_type_step-saving.svg) 50% 100% no-repeat;
    padding: 150px 0 50px;
    text-align: center;
    line-height: 70px;
    font-size: 37px;
  }
</style>