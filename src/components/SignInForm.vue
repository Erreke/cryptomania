<template>
    <form class="m-t-md" @submit.prevent="handleSubmit">


        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" class="form-control mt1" placeholder="Введи свой емейл" name="email" id="email" v-model="email" required>
        </div>

        <div class="form-group">
            <label for="password">Пароль:</label>
            <input type="password" class="form-control mt1" placeholder="Введи свой пароль" name="password" id="password" v-model="password" required>
        </div>

        <div class="form-group">
            <button type="submit" :class="{'btn btn-success btn-block': true, 'ajax-loading': isAuthorizationProcess}">Войти</button>
        </div>

        <router-link :to="{ name: 'ProfileResetPasswordPage' }" class="display-block text-center m-t-md">Забыл пароль?</router-link>

        <hr>

        <div class="form-group">
            <h4 class="text-center">Ты еще не участвуешь в проекте?</h4>
            <router-link :to="{ name: 'SignUpPage' }" class="btn btn-primary btn-block m-t-md ">Создай свой профиль</router-link>
        </div>
    </form>
</template>


<script>
    import firebase from 'firebase';
    import {mapGetters} from 'vuex';
    import {showErrors} from './SweetAlerts';

    export default {
        name: 'sign-in-form',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: mapGetters([
            'isAuthorizationProcess'
        ]),
        methods: {
            handleSubmit() {
                this.$store.commit('SET_AUTHORIZATION_PROCESS', true);

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$store.commit('SET_AUTHORIZATION_PROCESS', false);
                        this.$router.push({name: 'LevelOnePage'});

                    })
                    .catch((error) => {
                        this.$store.commit('SET_AUTHORIZATION_PROCESS', false);

                        switch (error.code) {

                            case 'auth/wrong-password':
                                showErrors(this, 'Не правильный логин или пароль...');
                                break;

                            case 'auth/user-not-found':
                                showErrors(this, 'Пользователь с такой электронной почтой не найден...');
                                break;

                            case 'auth/user-disabled':
                                showErrors(this, 'Пользователь заблокирован...');
                                break;

                            default:
                                showErrors(this, 'Произошла неизвестная ошибка...');
                                break;
                        }
                    });
            }
        }
    }
</script>
