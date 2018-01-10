<template>
    <default-layout>
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <div class="panel panel-white">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-xs-10 col-lg-offset-0 col-md-offset-0 col-xs-offset-1">

                                <div v-if="loggedUser.avatar" class="col-lg-12 col-md-12 col-xs-12 m-b-sm profile-avatar-container" :style="{ backgroundImage: `url(${loggedUser.avatar})` }"></div>
                                <div v-if="!loggedUser.avatar" class="col-lg-12 col-md-12 col-xs-12 m-b-sm profile-avatar-container"></div>

                                <div class="col-lg-12 col-md-12 col-xs-12 m-b-sm">
                                    <router-link :to="{ name: 'ProfileEditPage' }" class="btn btn-block btn-primary m-b-xs">Редактировать</router-link>
                                    <router-link :to="{ name: 'ProfileEditAvatarPage' }" class="btn btn-block btn-success m-b-xs">Сменить аватар</router-link>
                                    <router-link :to="{ name: 'ProfileEditPasswordPage' }" class="btn btn-block btn-danger m-b-xs">Сменить пароль</router-link>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-xs-10 col-lg-offset-0 col-md-offset-0 col-xs-offset-1">
                                <p><strong>{{ loggedUser.firstName }} {{ loggedUser.secondName }}</strong></p>
                                <p v-if="loggedUser.wallet" class="profile-wallet">{{ loggedUser.wallet }}</p>
                                <p v-if="loggedUser.phone"><i class="fa fa-phone"></i>&nbsp;{{ loggedUser.phone }}</p>
                                <p v-if="loggedUser.email"><i class="fa fa-at"></i>&nbsp;<a :href="'mailto:' + loggedUser.email">{{ loggedUser.email }}</a></p>
                                <p v-if="loggedUser.odnoklassniki"><i class="fa fa-odnoklassniki"></i>&nbsp;<a :href="loggedUser.odnoklassniki" target="_blank">{{ loggedUser.odnoklassniki }}</a></p>
                                <p v-if="loggedUser.instagram"><i class="fa fa-instagram"></i>&nbsp;<a :href="loggedUser.instagram" target="_blank">{{ loggedUser.instagram }}</a></p>
                                <p v-if="loggedUser.facebook"><i class="fa fa-facebook"></i>&nbsp;<a :href="loggedUser.facebook" target="_blank">{{ loggedUser.facebook }}</a></p>
                                <p v-if="loggedUser.vk"><i class="fa fa-vk"></i>&nbsp;<a :href="loggedUser.vk" target="_blank">{{ loggedUser.vk }}</a></p>
                                <p v-if="loggedUser.google"><i class="fa fa-google-plus"></i>&nbsp;<a :href="loggedUser.google" target="_blank">{{ loggedUser.google }}</a></p>
                                <p v-if="loggedUser.twitter"><i class="fa fa-twitter"></i>&nbsp;<a :href="loggedUser.twitter" target="_blank">{{ loggedUser.twitter }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-white">
                    <div class="panel-heading">Мой текст для отправки друзьям:</div>
                    <div class="panel-body">
                        <div class="alert alert-warning" role="alert">
                            <p>
                                Пользоваться Bitcoin еще никогда не было так просто. Первый, самый быстрорастущий, образовательный онлайн практикум по заработку на криптовалюте в стиле бизнес-марафона и с очень выгодной партнерской программой <router-link :to="{ name: 'MainUnderMentor', params: { userId: loggedUser.id }}">dfgdfg</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-4">
                <div class="panel panel-white">
                    <div class="panel-heading">Мой номер в проекте:</div>
                    <div class="panel-body">
                        <div class="alert alert-success" role="alert">
                            <p>№ {{ loggedUser.id }}</p>
                        </div>
                    </div>
                </div>
                <div class="panel panel-white">
                    <div class="panel-heading">Моя реферальная ссылка:</div>
                    <div class="panel-body">
                        <div class="alert alert-info" role="alert">
                            <p><router-link :to="{ name: 'MainUnderMentor', params: { userId: loggedUser.id }}">fdfg</router-link></p>
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
        name: 'ProfilePage',
        metaInfo: {
            title: 'Мой профиль'
        },
        components: {
            DefaultLayout
        },
        computed: mapGetters([
            'loggedUser'
        ])
    }
</script>

<style>
    .profile-avatar-container {
        background-image: url(../assets/i/blocks/sidebar/default_avatar.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 150px;
    }
    .profile-wallet {
        background-image: url(../assets/i/icons/bitcoin-logo.svg);
        background-repeat: no-repeat;
        background-position: 0 5px;
        word-wrap: break-word;
        padding-left: 15px;
    }
</style>
