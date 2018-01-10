<template>
    <light-layout>
        <ol>
            <li>
                <router-link :to="{ name: 'MainPage' }">Главная</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'SignInPage' }">Войти</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'SignUpPage' }">Регистрация</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'LevelOnePage' }">Уровень первый</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'LevelTwoPage' }">Уровень второй</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'LevelThreePage' }">Уровень третий</router-link>
            </li>
        </ol>

        <button @click="test">test</button>

    </light-layout>
</template>

<script>
    import LightLayout from '@/layouts/light'

    export default {
        name: 'MainPage',
        metaInfo: {
            title: 'Главная'
        },
        components: {
            LightLayout
        },
        methods: {
            test() {
                const userId = 'iefjwef2323e';
                const name = 'QWEQWE';
                const imageUrl = 'WDVWVWEVWEVWE';
                const email = 'ereke@list.ru';

                const www = window.DB.ref('users/' + userId).set({
                    username: name,
                    email: email,
                    profile_picture : imageUrl
                });

                console.log(www)
            }
        }
    }
</script>
