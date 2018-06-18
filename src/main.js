import Vue from 'vue';
import Meta from 'vue-meta';
import firebase from 'firebase';
import VueScrollTo from 'vue-scrollto';
import VueSweetalert2 from 'vue-sweetalert2';

import store from '@/store';
import router from '@/router';
import App from '@/App';
import '@/firebase/init';

Vue.use(Meta);
Vue.use(VueScrollTo);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

function tryToAuth(vm, user) {
  if (user) {
    vm.$store.dispatch('user/INIT_USER', user);
  } else {
    vm.$store.commit('user/UNSET_USER');
  }
}

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      template: '<App/>',
      components: {App},
      beforeCreate() {
        tryToAuth(this, user);
      },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          tryToAuth(this, user);
        });
      },
    });
  }
});
