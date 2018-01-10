<template>
    <form class="m-t-md" @submit.prevent="handleSubmit">

        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" class="form-control mt1" placeholder="Введи свой емейл" name="email" id="email" v-model="email">
        </div>


        <div class="form-group">
            <button type="submit" :class="['btn btn-success btn-block', {'ajax-loading': isUserPasswordResettingProcess}]">Сбросить</button>

            <router-link :to="{ name: 'MainPage' }" class="btn btn-default btn-block m-t-md">Отмена</router-link>
        </div>

    </form>

</template>


<script>
    import firebase from 'firebase';
    import {mapGetters} from 'vuex';
    import {showSuccess, showErrors} from './SweetAlerts';

    export default {
        name: 'reset-password-form',
        data() {
            return {
                email: null
            }
        },
        computed: mapGetters([
            'isUserPasswordResettingProcess'
        ]),
        methods: {
            handleSubmit() {
                this.$store.commit('SET_USER_PASSWORD_RESETTING_PROCESS_STATUS', true);






                /*

                firebase.auth().sendPasswordResetEmail(this.email)
                    .then(() => {

                        showSuccess(this, 'Мы отправили Вам письмо со ссылкой для сброса пароля. Пройдите по ссылке и следуйте дальнейшим указаниям.')
                            .then(() => {
                                this.$store.commit('SET_USER_PASSWORD_RESETTING_PROCESS_STATUS', false);
                                this.$router.push({name: 'MainPage'})
                            });
                    })
                    .catch((error) => {
                        this.$store.commit('SET_USER_PASSWORD_RESETTING_PROCESS_STATUS', false);

                        console.log(error);

                        switch (error.code) {

                            case 'auth/invalid-email':
                                showErrors(this, 'Не правильный адрес электронной почты...');
                                break;

                            case 'auth/user-not-found':
                                showErrors(this, 'Пользователь с такой электронной почтой не найден...');
                                break;

                            default:
                                showErrors(this, 'Произошла неизвестная ошибка...');
                                break;
                        }
                    });

                    */
            }
        }
    }
</script>
