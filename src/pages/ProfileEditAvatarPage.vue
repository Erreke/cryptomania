<template>
    <cabinet-layout>
        <div class="row">
            <div class="col-xs-12 col-md-5 col-lg-5">
                <div class="avatar-container" :style="{ backgroundImage: `url(${avatarImage})` }" v-if="avatarImage"></div>
                <div class="avatar-container avatar-container-empty" v-else></div>
            </div>
            <div class="col-xs-12 col-md-7 col-lg-7">
                <span class="btn btn-success fileinput-button">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span>Выбрать файл...</span>
                    <input type="file" @change="handleAvatarSelect">
                </span>

                <button
                        type="button"
                        :class="{
                        'btn btn-primary': true,
                        'user-profile-button-saving': isUserAvatarSavingProcess
                    }"
                        @click.prevent="handleAvatarSave"
                        v-if="isAvatarSelectedToUpload"
                >Сохранить
                </button>

                <router-link v-if="isAvatarSelectedToUpload" :to="{ name: 'ProfilePage' }" class="btn btn-danger">Отмена</router-link>
            </div>
        </div>
    </cabinet-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CabinetLayout from '@/layouts/cabinet'

    export default {
        name: 'ProfileEditAvatarPage',
        metaInfo: {
            title: 'Изменение аватара'
        },
        components: {
            CabinetLayout
        },
        data() {
            return {
                avatarBase64: null
            }
        },
        computed: {
            ...mapGetters([
                'loggedUser',
                'isAvatarSelectedToUpload',
                'isUserAvatarSavingProcess',
            ]),
            avatarImage() {
                return this.avatarBase64 ? this.avatarBase64 : (this.loggedUser.avatar ? this.loggedUser.avatar : null)
            }
        },
        methods: {
            handleAvatarSelect(e) {
                const files = e.target.files || e.dataTransfer.files;

                if (!files.length) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.avatarBase64 = e.target.result;

                    this.$store.commit('SET_AVATAR_SELECTED_STATUS', true);
                };
                reader.readAsDataURL(files[0]);
            },
            handleAvatarSave() {
                this.$store.dispatch('SAVE_USER_AVATAR', this.avatarBase64)
            },
        }
    }
</script>

<style>
    .avatar-container {
        width: 300px;
        min-height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom:20px;
    }

    .avatar-container-empty {
        background-image: url(../assets/i/blocks/sidebar/default_avatar.svg);
    }

    .fileinput-button {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .fileinput-button input {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        opacity: 0;
        -ms-filter: 'alpha(opacity=0)';
        font-size: 200px;
        direction: ltr;
        cursor: pointer;
    }
</style>
