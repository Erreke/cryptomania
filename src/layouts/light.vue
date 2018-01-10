<template>
    <main class="page-content">
        <div class="page-inner" style="min-height:931px !important">
            <div id="main-wrapper">
                <div class="row">
                    <div class="col-md-3 center">

                        <slot></slot>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'light-layout',
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

