<template>
    <default-layout>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="panel panel-white">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-md-7 col-lg-5 col-md-offset-2 col-lg-offset-4">
                                <form class="m-t-md" role="form" method="POST" @submit.prevent="handlePasswordSave">
                                    <div class="form-group">
                                        <label for="old_password">Действующий пароль:</label>
                                        <input type="password" class="form-control" name="old_password" id="old_password" placeholder="Введи действующий пароль" autocomplete="off" v-model="oldPassword" />
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Новый пароль:</label>
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Введи новый пароль" v-model="newPassword" />
                                    </div>

                                    <div class="form-group">
                                        <label for="password_confirmation">Повтори новый пароль:</label>
                                        <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Чтобы не ошибиться повтори новый пароль еще раз" v-model="passwordConfirmation" />
                                    </div>

                                    <div class="form-group">
                                        <p><strong>Все поля обязательны для заполнения</strong></p>
                                    </div>

                                    <div class="form-group text-right">
                                        <router-link :to="{ name: 'ProfilePage' }" class="btn btn-danger m-t-xs m-r-xs col-md-4">Отмена</router-link>
                                        <button
                                            type="submit"
                                            v-bind:disabled="!isPasswordReadyToSave"
                                            :class="{
                                                'btn btn-success m-t-xs col-md-4': true,
                                                'user-profile-button-saving': isUserPasswordSavingProcess
                                            }"
                                        >Сохранить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import DefaultLayout from '@/layouts/default'

    export default {
        name: 'ProfileEditPasswordPage',
        metaInfo: {
            title: 'Изменение пароля'
        },
        components: {
            DefaultLayout
        },
        data() {
            return {
                oldPassword: null,
                newPassword: null,
                passwordConfirmation: null
            }
        },
        computed: {
            ...mapGetters([
               'loggedUser',
               'isUserPasswordSavingProcess',
            ]),
            isPasswordReadyToSave() {
                return this.oldPassword && this.newPassword && this.passwordConfirmation
            }
        },
        methods: {
            handlePasswordSave() {
                this.$store.dispatch('UPDATE_USER_PASSWORD', this.newPassword)
                    .then(() => {
                        this.$store.commit('SET_USER_PASSWORD_SAVING_PROCESS_STATUS', false);
                        this.$router.push({name: 'ProfilePage'})
                    });
            },
        }
    }
</script>
