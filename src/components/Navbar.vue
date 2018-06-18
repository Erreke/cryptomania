<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="sidebar-pusher">
        <a href="#" class="waves-effect waves-button waves-classic push-sidebar" @click.prevent="handleToggleSidebarVisible">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div class="logo-box">
        <router-link :to="{ name: 'MainPage' }" class="logo-text">
          <img class="navbar__logo" src="../assets/i/blocks/navbar/navbar__logo.png">
          <img class="navbar__logo-small" src="../assets/i/blocks/navbar/navbar__logo-small.png">
        </router-link>
      </div>
      <div class="search-button">
        <a href="https://www.facebook.com/cryptomania" class="waves-effect waves-button waves-classic"><i
          class="fa fa-facebook"></i></a>
        <a href="https://vk.com/cryptomania" class="waves-effect waves-button waves-classic"><i
          class="fa fa-vk"></i></a>
        <a href="#" class="waves-effect waves-button waves-classic" data-toggle="modal"
           data-target=".js-compose-email-to-adam-dialog"><i class="fa fa-envelope">&nbsp;</i>Написать Адаму</a>

        <!--TODO: Сделать поиск-->
        <!--<a href="javascript:void(0);" class="waves-effect waves-button waves-classic show-search"><i class="fa fa-search"></i></a>-->
      </div>
      <div class="topmenu-outer">
        <div class="top-menu">
          <ul class="nav navbar-nav navbar-left">
            <li>
              <a href="#" class="waves-effect waves-button waves-classic sidebar-toggle"
                 @click.prevent="handleToggleSidebarSize">
                <i class="fa fa-bars"></i>
              </a>
            </li>
            <li>
              <a href="#" class="waves-effect waves-button waves-classic toggle-fullscreen"
                 @click.prevent="toggleFullScreen">
                <i class="fa fa-expand"></i>
              </a>
            </li>

            <!--TODO: Сделать меню настроек-->
            <!--
            <li class="dropdown">
                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
                    <i class="fa fa-cogs"></i>
                </a>
                <ul class="dropdown-menu dropdown-md dropdown-list theme-settings" role="menu">
                    <li class="li-group">
                        <ul class="list-unstyled">
                            <li class="no-link" role="presentation">
                                Зафиксировать заголовок
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right fixed-header-check" checked>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="li-group">
                        <ul class="list-unstyled">
                            <li class="no-link" role="presentation">
                                Зафиксировать меню
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right fixed-sidebar-check">
                                </div>
                            </li>
                            <li class="no-link" role="presentation">
                                Горизонтальное меню
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right horizontal-bar-check">
                                </div>
                            </li>
                            <li class="no-link" role="presentation">
                                Минимальное меню
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right toggle-sidebar-check">
                                </div>
                            </li>
                            <li class="no-link" role="presentation">
                                Компактное меню
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right compact-menu-check">
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="li-group">
                        <ul class="list-unstyled">
                            <li class="no-link" role="presentation">
                                Коробочный макет
                                <div class="ios-switch pull-right switch-md">
                                    <input type="checkbox" class="js-switch pull-right boxed-layout-check">
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="no-link"><button class="btn btn-default reset-options">По-умолчанию</button></li>
                </ul>
            </li>
            -->

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" class="waves-effect waves-button waves-classic" data-toggle="modal"
                 data-target=".js-compose-email-to-adam-dialog"><i class="fa fa-envelope">&nbsp;</i>Написать Адаму</a>
            </li>
            <li>
              <a href="https://vk.com/cryptomania" class="waves-effect waves-button waves-classic"><i
                class="fa fa-vk"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/cryptomania" class="waves-effect waves-button waves-classic"><i
                class="fa fa-facebook"></i></a>
            </li>

            <!--TODO: Сделать поиск и уведомления-->
            <!--
            <li>
                <a href="javascript:void(0);" class="waves-effect waves-button waves-classic show-search"><i class="fa fa-search"></i></a>
            </li>

            <li class="dropdown">
                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="fa fa-bell"></i><span class="badge badge-success pull-right">3</span></a>
                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                    <li><p class="drop-title">У вас 3 необработанные заявки!</p></li>
                    <li class="dropdown-menu-list slimscroll tasks">
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">
                                    <div class="task-icon badge badge-success"><i class="icon-user"></i></div>
                                    <span class="badge badge-roundless badge-default pull-right">1min ago</span>
                                    <p class="task-details">New user registered.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-icon badge badge-danger"><i class="icon-energy"></i></div>
                                    <span class="badge badge-roundless badge-default pull-right">24min ago</span>
                                    <p class="task-details">Database error.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="task-icon badge badge-info"><i class="icon-heart"></i></div>
                                    <span class="badge badge-roundless badge-default pull-right">1h ago</span>
                                    <p class="task-details">Reached 24k likes</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="drop-all"><a href="#" class="text-center">Все уведомления</a></li>
                </ul>
            </li>
            -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'navbar',

    methods: {
      ...mapMutations('ui', {
        handleToggleSidebarVisible: 'TOGGLE_SIDEBAR_VISIBLE',
        handleToggleSidebarSize: 'TOGGLE_SIDEBAR_SIZE',
      }),
      toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else if (document.cancelFullScreen) {
          document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        }
      }
    }
  }
</script>

