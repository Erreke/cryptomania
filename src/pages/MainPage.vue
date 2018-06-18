<template>
  <default-layout>
    <h1 class="title">Cryptomania.me</h1>
    <p>Первый, самый быстрорастущий, образовательный онлайн практикум по заработку на криптовалюте с очень выгодной
      партнерской программой в стиле бизнес-марафона</p>

    <router-link v-if="isAuthenticated" class="btn btn-success" :to="{ name: 'EducationFirstLevelPage' }">Перейти в свой
      кабинет
    </router-link>

    <button class="btn btn-primary" v-if="!isAuthenticated" @click="OPEN_SIGN_IN_DIALOG">Вход в кабинет</button>
    <button class="btn btn-success" v-if="!isAuthenticated" @click="OPEN_SIGN_UP_DIALOG">Регистрация</button>

    <sign-in-dialog></sign-in-dialog>
    <sign-up-dialog></sign-up-dialog>
  </default-layout>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  import DefaultLayout from '@/layouts/default';
  import SignInDialog from '@/components/SignInDialog';
  import SignUpDialog from '@/components/SignUpDialog';

  export default {
    name: 'MainPage',

    metaInfo: {
      title: 'Главная страница',
    },

    components: {
      DefaultLayout,
      SignInDialog,
      SignUpDialog,
    },

    computed: {
      ...mapGetters('user', [
        'isAuthenticated',
      ]),
    },

    methods: {
      ...mapMutations('auth', [
        'OPEN_SIGN_IN_DIALOG',
        'OPEN_SIGN_UP_DIALOG',
      ]),
    },
  }
</script>
