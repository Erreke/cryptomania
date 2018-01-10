<template>
    <default-layout>
        <h1 class="title">Cryptomania.me</h1>
        <p>Первый, самый быстрорастущий, образовательный онлайн практикум по заработку на криптовалюте с очень выгодной
            партнерской программой в стиле бизнес-марафона</p>

        <router-link v-if="isAuthenticated" class="btn btn-success" :to="{ name: 'LevelOnePage' }">Перейти в свой
            кабинет
        </router-link>
        <div v-else="isAuthenticated">
            <button class="btn btn-success" v-show="!isLoggedIn()" @click="handleRegistration()">Начать сейчас</button>
            <button class="btn btn-primary" v-show="!isLoggedIn()" @click="handleLogin()">Вход в кабинет</button>
            <button class="btn btn-primary" v-show="isLoggedIn()" @click="handleLogout()">Выйти</button>

            <!--
            <a class="btn btn-success" href="#" @click.prevent="OPEN_REGISTRATION_DIALOG">Начать сейчас</a>
            <a class="btn btn-primary" href="#" @click.prevent="OPEN_LOGIN_DIALOG">Вход в кабинет</a>
            -->

        </div>

        <registration-dialog></registration-dialog>
        <login-dialog></login-dialog>
    </default-layout>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'

    import DefaultLayout from '@/layouts/default'
    import LoginDialog from '@/components/LoginDialog'
    import RegistrationDialog from '@/components/RegistrationDialog'

    export default {
        name: 'page-main',
        routeName: 'root',
        routeMeta: {
            title: 'Главная'
        },
        head: {
            title: 'Главная :: Cryptomania.me'
        },
        components: {
            DefaultLayout,
            RegistrationDialog,
            LoginDialog
        },
        computed: mapGetters([
            'isAuthenticated'
        ]),
        methods: {
            ...mapMutations([
                'OPEN_LOGIN_DIALOG',
                'OPEN_REGISTRATION_DIALOG',
                'CLOSE_LOGIN_DIALOG',
                'SET_CURRENT_LEVEL'
            ]),
            handleRegistration() {

            },
            handleLogin() {
            },
            handleLogout() {
            },
            isLoggedIn() {
            },
        },
        mounted: function () {
            //this.$nextTick(this.SET_CURRENT_LEVEL('first'));
            //this.$nextTick(this.CLOSE_LOGIN_DIALOG);
        },
    }
</script>
