<template>
    <light-layout>
        <div class="login-box">
            <p class="text-center logo-name text-lg">Авторизация</p>
            <p class="text-center m-t-md">
                <router-link :to="{ name: 'MainPage' }">#CRYPTOMANIA</router-link>
            </p>

            <sign-in-form></sign-in-form>
        </div>
    </light-layout>
</template>

<script>
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
    }
</script>
