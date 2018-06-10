<template>
    <div :class="{
        'page page-header-fixed page-sidebar-fixed': true,
        'small-sidebar': isSidebarSmall
    }">
        <div class="page-content content-wrap container">
            <navbar></navbar>
            <sidebar></sidebar>
            <compose-email-to-adam></compose-email-to-adam>
            <div :class="{
                'page-inner': true,
                'sidebar-visible': isSidebarVisible
            }">
                <alert-fill-all-data></alert-fill-all-data>
                <crumbs></crumbs>
                <div id="main-wrapper">
                    <flash></flash>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    import Navbar from '../components/Navbar'
    import Sidebar from '../components/Sidebar'
    import ComposeEmailToAdam from '../components/dialogs/ComposeEmailToAdam'
    import AlertFillAllData from '../components/alert/AlertFillAllData'
    import Crumbs from '../components/Crumbs'
    import Flash from '../components/Flash'

    export default {
        name: 'default-layout',
        components: {
            Navbar,
            Sidebar,
            ComposeEmailToAdam,
            AlertFillAllData,
            Crumbs,
            Flash
        },
        computed: mapGetters([
            'isSidebarSmall',
            'isSidebarVisible'
        ]),
        watch: {
            $route() {
                this.$store.commit('HIDE_SIDEBAR')
            }
        }
    }
</script>

<style>
    @import url('../vendors/old/pace-theme-flash.css');
    @import url('../vendors/old/bootstrap.css');
    @import url('../vendors/old/font-awesome.css');
    @import url('../vendors/old/simple-line-icons.css');
    @import url('../vendors/old/menu_cornerbox.css');
    @import url('../vendors/old/waves.min.css');
    @import url('../vendors/old/switchery.min.css');
    @import url('../vendors/old/3d-bold-navigation.css');
    @import url('../vendors/old/slidepushmenus.css');
    @import url('../vendors/old/weather-icons.css');
    @import url('../vendors/old/MetroJs.css');
    @import url('../vendors/old/toastr.min.css');
    @import url('../assets/css/common/modern.css');
    @import url('../assets/css/common/themes/green.css');
    @import url('../assets/css/common/custom.css');
    @import url('../assets/css/common/blocks/sidebar/sidebar.css');
    @import url('../assets/css/common/blocks/navbar/navbar.css');
    @import url('../assets/css/common/level.css');
</style>
