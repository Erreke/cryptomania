import Vue from 'vue';
import Meta from 'vue-meta';
import firebase from 'firebase';
import VueScrollTo from 'vue-scrollto';
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App'

import router from './router'
import store from './store'
Vue.config.productionTip = false;

Vue.use(Meta);
Vue.use(VueScrollTo);
Vue.use(VueSweetalert2);

let app;
let firebaseConfig = {
    apiKey: "AIzaSyA6qbciWron2B7KIMw2Vsx0_PTDoCxxM0k",
    authDomain: "cryptomania-4320b.firebaseapp.com",
    databaseURL: "https://cryptomania-4320b.firebaseio.com",
    projectId: "cryptomania-4320b",
    storageBucket: "cryptomania-4320b.appspot.com",
    messagingSenderId: "560475980939"
};

firebase.initializeApp(firebaseConfig);
window.DB = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            template: '<App/>',
            components: {App}
        });
    }
});