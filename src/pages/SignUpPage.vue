<template>
    <light-layout>
        <div class="login-box">
            <p class="text-center logo-name text-lg">Регистрация</p>
            <p class="text-center m-t-md">
                <router-link :to="{ name: 'MainPage' }">#CRYPTOMANIA</router-link>
            </p>

            <sign-up-form></sign-up-form>
        </div>
    </light-layout>
</template>

<script>
    import LightLayout from '@/layouts/light'
    import SignUpForm from '@/components/SignUpForm'

    export default {
        name: 'SignUpPage',
        metaInfo: {
            title: 'Регистрация'
        },
        components: {
            LightLayout,
            SignUpForm
        }
    }
</script>
