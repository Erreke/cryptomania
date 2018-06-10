import Vue from 'vue';
import Meta from 'vue-meta';
import firebase from 'firebase';
import VueScrollTo from 'vue-scrollto';
import VueFirestore from 'vue-firestore';
import VueSweetalert2 from 'vue-sweetalert2';

import {store} from './store';
import router from './router';

import App from './App'

Vue.use(Meta);
Vue.use(VueScrollTo);
Vue.use(VueFirestore);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

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
        if (user) {
          this.$store.commit('SET_USER', user);
        } else {
          this.$store.commit('UNSET_USER');
        }

        // this.$store.dispatch('INIT_DATA');
      },
    });
  }
});
