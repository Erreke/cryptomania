<template>
    <div :class="{
        'page-sidebar sidebar': true,
        'visible': isSidebarVisible
    }">
        <div class="page-sidebar-inner slimscroll">
            <ul class="menu accordion-menu">
                <router-link exact tag="li" :to="{ name: 'ProfilePage'}" class="logo-text" active-class="active">
                    <a class="waves-effect waves-button">
                        <span class="menu-icon glyphicon glyphicon-user sidebar-avatar-icon"></span>

                        <div v-if="loggedUser.avatar"
                             class="img-circle img-responsive m-b-sm sidebar-header sidebar-avatar-container"
                             :style="{ backgroundImage: `url(${loggedUser.avatar})` }"></div>
                        <div v-if="!loggedUser.avatar"
                             class="img-circle img-responsive m-b-sm sidebar-header sidebar-avatar-container"></div>

                        <p><strong>{{ loggedUser.firstName }} {{ loggedUser.secondName }}</strong></p>
                        <p class="my-profile">(Мой профиль)</p>
                    </a>
                </router-link>

                <router-link tag="li" :to="{ name: 'LevelOnePage' }" active-class="active">
                    <a class="waves-effect waves-button">
                        <span class="menu-icon glyphicon glyphicon-education"/>
                        <p>Первый уровень</p>
                    </a>
                </router-link>
                <router-link tag="li" :to="{ name: 'LevelTwoPage' }" active-class="active">
                    <a class="waves-effect waves-button">
                        <span class="menu-icon glyphicon glyphicon-fire"/>
                        <p>Второй уровень</p>
                    </a>
                </router-link>
                <router-link tag="li" :to="{ name: 'LevelThreePage' }" active-class="active">
                    <a class="waves-effect waves-button">
                        <span class="menu-icon fa fa-rocket"/>
                        <p>Третий уровень</p>
                    </a>
                </router-link>
                <router-link tag="li" :to="{ name: 'SignOutPage' }" active-class="active">
                    <a class="waves-effect waves-button">
                        <span class="menu-icon glyphicon glyphicon-log-out"></span>
                        <p>Выход</p>
                    </a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'loggedUser',
                'isSidebarVisible',
            ])
        }
    }
</script>

<style>
    .sidebar-avatar-container {
        background-image: url(../assets/i/blocks/sidebar/default_sidebar_avatar.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 124px;
        width: 124px;
    }
</style>
