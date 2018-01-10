<template>
    <form class="m-t-md" @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="email">E-Mail:</label>
            <input type="email" class="form-control mt1" name="email" id="email" placeholder="Укажи адрес электронной почты" v-model="email">
        </div>

        <div class="form-group">
            <label for="password">Пароль:</label>
            <input type="password" class="form-control mt1" name="password" id="password" placeholder="Придумай пароль" v-model="password">
        </div>

        <input type="hidden" class="form-control" name="mentor_id" v-model="mentorId">

        <div class="form-group">
            <button type="submit" :class="{'btn btn-success btn-block': true, 'ajax-loading': isRegistrationProcess}">Регистрация</button>
        </div>

        <hr>

        <div class="form-group">
            <h4 class="text-center">Уже участвуешь в проекте?</h4>
            <router-link :to="{ name: 'SignInPage' }" class="btn btn-primary btn-block m-t-xs">Войди в свой профиль
            </router-link>
        </div>
    </form>
</template>


<script>
    import firebase from 'firebase';
    import {mapGetters} from 'vuex';
    import {showErrors} from './SweetAlerts';

    export default {
        name: 'sign-up-form',
        data() {
            return {
                email: '',
                password: '',
                mentorId: '',
            }
        },
        computed: mapGetters([
            'isRegistrationProcess'
        ]),
        methods: {
            handleSubmit() {
                this.$store.commit('SET_REGISTRATION_PROCESS', true);

                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$store.commit('SET_REGISTRATION_PROCESS', false);
                        this.$router.push({name: 'LevelOnePage'})

                    })
                    .catch((error) => {
                        this.$store.commit('SET_REGISTRATION_PROCESS', false);

                        switch (error.code) {

                            case 'auth/email-already-in-use':
                                showErrors(this, 'Пользователь с такой электронной почтой уже зарегистрирован...');
                                break;

                            case 'auth/invalid-email':
                                showErrors(this, 'Не правильный адрес электронной почты...');
                                break;

                            case 'auth/operation-not-allowed':
                                showErrors(this, 'Операция недоступна...');
                                break;

                            case 'auth/weak-password':
                                showErrors(this, 'Очень слабый пароль...');
                                break;

                            default:
                                showErrors(this, 'Произошла неизвестная ошибка...');
                                break;
                        }
                    });
            },
            _signUpByProvider() {
                let provider = new firebase.auth.GoogleAuthProvider();
                //var provider = new firebase.auth.FacebookAuthProvider();
                //var provider = new firebase.auth.TwitterAuthProvider();


                firebase.auth().currentUser.linkWithPopup(provider).then(function(result) {

                    console.log(result);

                }).catch(function(error) {

                    console.log(error);

                });
            }
        }
    }
</script>
