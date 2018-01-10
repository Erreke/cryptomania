import Vue from 'vue'
import Router from 'vue-router';
import firebase from 'firebase';

import MainPage from '@/pages/MainPage'
import LevelOnePage from '@/pages/LevelOnePage'
import LevelTwoPage from '@/pages/LevelTwoPage'
import LevelThreePage from '@/pages/LevelThreePage'

import SignUpPage from '@/pages/SignUpPage'
import SignInPage from '@/pages/SignInPage'
import SignOutPage from '@/pages/SignOutPage'

import ProfilePage from '@/pages/ProfilePage'
import ProfileEditPage from '@/pages/ProfileEditPage'
import ProfileEditAvatarPage from '@/pages/ProfileEditAvatarPage'
import ProfileEditPasswordPage from '@/pages/ProfileEditPasswordPage'
import ProfileResetPasswordPage from '@/pages/ProfileResetPasswordPage'

import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/:userId',
            name: 'MainUnderMentor',
            component: MainPage
        },
        {
            path: '/level/one/',
            name: 'LevelOnePage',
            component: LevelOnePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/level/two/',
            name: 'LevelTwoPage',
            component: LevelTwoPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/level/three/',
            name: 'LevelThreePage',
            component: LevelThreePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile/',
            name: 'ProfilePage',
            component: ProfilePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile/edit/',
            name: 'ProfileEditPage',
            component: ProfileEditPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile/edit/avatar/',
            name: 'ProfileEditAvatarPage',
            component: ProfileEditAvatarPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile/edit/password/',
            name: 'ProfileEditPasswordPage',
            component: ProfileEditPasswordPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile/reset/password/',
            name: 'ProfileResetPasswordPage',
            component: ProfileResetPasswordPage
        },
        {
            path: '/sign-in/',
            name: 'SignInPage',
            component: SignInPage
        },
        {
            path: '/sign-up/',
            name: 'SignUpPage',
            component: SignUpPage
        },
        {
            path: '/sign-out/',
            name: 'SignOutPage',
            component: SignOutPage
        },
        {
            path: '*',
            name: 'NotFoundPage',
            component: NotFoundPage
        }
    ]
});

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    console.log('requiresAuth', requiresAuth);
    console.log('currentUser', currentUser);


    if (requiresAuth && !currentUser) {
        next({name: 'SignInPage'});

    } else {
        next();

    }
});

export default router;