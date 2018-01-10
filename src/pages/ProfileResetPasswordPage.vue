<template>
    <light-layout>
        <div class="login-box">
            <p class="text-center logo-name text-lg">Сброс пароля</p>
            <p class="text-center m-t-md">
                <router-link :to="{ name: 'MainPage' }">#CRYPTOMANIA</router-link>
            </p>

            <reset-password-form></reset-password-form>
        </div>
    </light-layout>
</template>

<script>
    import LightLayout from '@/layouts/light'
    import ResetPasswordForm from '@/components/ResetPasswordForm'

    export default {
        name: 'ProfileResetPasswordPage',
        metaInfo: {
            title: 'Сброс пароля'
        },
        components: {
            LightLayout,
            ResetPasswordForm
        }
    }
</script>
