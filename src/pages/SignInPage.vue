<template>
  <light-layout>
    <div class="login-box panel panel-white">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-6">
            <router-link :to="{ name: 'MainPage' }" class="logo-name text-lg">#CRYPTOMANIA</router-link>

            <p class="login-info">The Modern UI Framework is a premium Web Application Admin Dashboard built on top of Twitter Bootstrap 3.3.4 Framework.<br> It was created to be the most functional, clean and well designed theme for any types of backend applications.We have carefully designed all common elements.</p>

            <div class="btn-group btn-group-justified m-t-sm" role="group" aria-label="Justified button group">
              <a href="#" class="btn btn-facebook"@click.prevent="handleSignInByProvider('Facebook')">
                <i class="fa fa-facebook"></i> Facebook</a>
              <a href="#" class="btn btn-twitter" @click.prevent="handleSignInByProvider('Twitter')">
                <i class="fa fa-twitter"></i> Twitter</a>
              <a href="#" class="btn btn-google" @click.prevent="handleSignInByProvider('Google')">
                <i class="fa fa-google-plus"></i> Google+</a>
            </div>
          </div>
          <div class="col-md-6">
            <sign-in-form></sign-in-form>
          </div>
        </div>
      </div>
    </div>
  </light-layout>
</template>

<script>
  import { mapActions } from 'vuex';

  import LightLayout from '@/layouts/light'
  import SignInForm from '@/components/SignInForm'

  export default {
    name: 'SignInPage',

    metaInfo: {
      title: 'Авторизация'
    },

    components: {
      LightLayout,
      SignInForm
    },

    methods: {
      ...mapActions('auth', {
        signInByProviderRequest: 'SIGN_IN_BY_PROVIDER_REQUEST',
      }),
      handleSignInByProvider(provider) {
        this.signInByProviderRequest(provider)
          .then(() => {
            this.$router.push({name: 'EducationFirstLevelPage'});
          });
      },
    },
  }
</script>
