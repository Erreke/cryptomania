export default {
  HIDE_SIDEBAR: (state) => {
    state.isSidebarVisible = false;
  },

  TOGGLE_SIDEBAR_VISIBLE: (state) => {
    state.isSidebarVisible = !state.isSidebarVisible;
    state.isSidebarSmall = false;
  },

  TOGGLE_SIDEBAR_SIZE: (state) => {
    state.isSidebarSmall = !state.isSidebarSmall;
  },

  TOGGLE_MENU_ITEM_EDUCATION: (state) => {
    state.isMenuItemEducationOpened = !state.isMenuItemEducationOpened;
  },
}
