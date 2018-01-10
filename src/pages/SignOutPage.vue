<template>
    <light-layout>
        <div class="page-auth-content logout">
            <p class="text-center logo-name text-lg">Выход из приложения</p>
            <p class="text-center m-t-md">Выходим...</p>
        </div>
    </light-layout>
</template>

<script>
    import firebase from 'firebase';
    import LightLayout from '@/layouts/light'

    export default {
        name: 'SignOutPage',
        metaInfo: {
            title: 'Выход'
        },
        components: {
            LightLayout
        },
        mounted() {
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'MainPage'})
            }).catch((error) => {
                console.log(error)
            });
        }
    }
</script>

<style>
    .logout {
        background-image: url(../assets/i/blocks/loader/loader_type_step-saving.svg);
        background-position: 50% 130px;
        background-repeat: no-repeat;
        padding-bottom: 100px;
    }
</style>