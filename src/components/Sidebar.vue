<template>
  <div
    v-if="loggedUser"
    :class="{
      'page-sidebar sidebar': true,
      'visible': isSidebarVisible
    }">
    <div class="page-sidebar-inner slimscroll">
      <ul class="menu accordion-menu">
        <router-link exact tag="li" :to="{ name: 'ProfilePage'}" class="logo-text" active-class="active">
          <a class="waves-effect waves-button">
            <span class="menu-icon glyphicon glyphicon-user sidebar-avatar-icon"></span>

            <div
              v-if="loggedUser.avatar"
              class="img-circle img-responsive m-b-sm sidebar-header sidebar-avatar-container"
              :style="{ backgroundImage: `url(${loggedUser.avatar})` }"></div>

            <div
              v-if="!loggedUser.avatar"
              class="img-circle img-responsive m-b-sm sidebar-header sidebar-avatar-container"></div>

            <p><strong>{{ loggedUser.displayName }}</strong></p>
            <p class="my-profile">(Мой профиль)</p>
          </a>
        </router-link>

        <router-link tag="li" :to="{ name: 'FinancePage' }" active-class="active">
          <a class="waves-effect waves-button">
            <span class="menu-icon glyphicon glyphicon-briefcase"/>
            <p>Мои финансы</p>
          </a>
        </router-link>

        <li :class="{
          'droplink': true,
          'active': isEducationItemsActive,
          'open': isMenuItemEducationOpened
        }">
          <a href="#" class="waves-effect waves-button" @click.prevent="toggleMenuItemEducation">
            <span class="menu-icon glyphicon glyphicon-education"></span>
            <p>Моё образование</p>
            <span class="arrow"></span>
          </a>
          <ul class="sub-menu" v-show="isMenuItemEducationOpened">

            <router-link tag="li" :to="{ name: 'EducationFirstLevelPage' }" active-class="active">
              <a>Первый уровень</a>
            </router-link>

            <router-link tag="li" :to="{ name: 'EducationSecondLevelPage' }" active-class="active">
              <a>Второй уровень</a>
            </router-link>

            <router-link tag="li" :to="{ name: 'EducationKnowledgeBasePage' }" active-class="active">
              <a>База знаний</a>
            </router-link>

          </ul>
        </li>

        <router-link tag="li" :to="{ name: 'TeamPage' }" active-class="active">
          <a class="waves-effect waves-button">
            <span class="menu-icon fa fa-rocket"/>
            <p>Моя команда</p>
          </a>
        </router-link>
        <router-link tag="li" :to="{ name: 'SupportPage' }" active-class="active">
          <a class="waves-effect waves-button">
            <span class="menu-icon glyphicon glyphicon-envelope"/>
            <p>Техподдержка</p>
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
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'SideBar',

    data() {
      return {
        educationRoutes: [
          'EducationFirstLevelPage',
          'EducationSecondLevelPage',
          'EducationKnowledgeBasePage',
        ]
      }
    },

    computed: {
      ...mapState('ui', [
        'isMenuItemEducationOpened',
        'isSidebarVisible',
      ]),
      ...mapGetters('user', [
        'loggedUser',
      ]),
      isEducationItemsActive() {
        return this.educationRoutes.includes(this.$route.name);
      },
    },

    methods: {
      ...mapMutations('ui', {
        toggleMenuItemEducation: 'TOGGLE_MENU_ITEM_EDUCATION'
      }),
    },
  };
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
