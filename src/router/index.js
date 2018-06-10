import Vue from 'vue'
import Router from 'vue-router';
import firebase from 'firebase';

import MainPage from '@/pages/MainPage'

import ProfilePage from '@/pages/ProfilePage'
import ProfileEditPage from '@/pages/ProfileEditPage'
import FinancePage from '@/pages/TEMP_PAGE'

import EducationFirstLevelPage from '@/pages/EducationFirstLevelPage'
import EducationSecondLevelPage from '@/pages/EducationSecondLevelPage'
import EducationKnowledgeBasePage from '@/pages/TEMP_PAGE'

import TeamPage from '@/pages/TEMP_PAGE'
import SupportPage from '@/pages/TEMP_PAGE'

import SignUpPage from '@/pages/SignUpPage'
import SignInPage from '@/pages/SignInPage'
import SignOutPage from '@/pages/SignOutPage'
import PasswordResetPage from '@/pages/PasswordResetPage'

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
      path: '/reset-password/',
      name: 'PasswordResetPage',
      component: PasswordResetPage
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
      path: '/finance/',
      name: 'FinancePage',
      component: FinancePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/education/first-level/',
      name: 'EducationFirstLevelPage',
      component: EducationFirstLevelPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/education/second-level/',
      name: 'EducationSecondLevelPage',
      component: EducationSecondLevelPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/education/knowledge-base/',
      name: 'EducationKnowledgeBasePage',
      component: EducationKnowledgeBasePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/team/',
      name: 'TeamPage',
      component: TeamPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/support/',
      name: 'SupportPage',
      component: SupportPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
});

const nonAuthenticatedRoutes = [
  'SignInPage',
  'SignUpPage',
  'PasswordResetPage',
];

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!firebase.auth().currentUser;
  const isRequiredAuth = to.matched.some(record => record.meta.requiresAuth);
  const inNonAuthenticated = nonAuthenticatedRoutes.includes(to.name);


  console.log('currentUser:', isAuthenticated);
  console.log('requiresAuth:', isRequiredAuth);

  // next();


  if (isRequiredAuth && !isAuthenticated) {
    next({name: 'SignInPage'});

  } else if (isAuthenticated && inNonAuthenticated ) {
    next({name: 'MainPage'});

  } else {
    next();

  }

});

/*
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const inNonAuthenticated = nonAuthenticatedRoutes.includes(to.name);

  console.log('Авторизован ли юзер:', isAuthenticated);
  console.log('Авторизация нужна:', requiresAuth);

  console.log('Авторизация to:', to);
  console.log('Авторизация from:', from);

  if (requiresAuth && !isAuthenticated) {
    next({name: 'SignInPage'});

  } else if ( isAuthenticated && inNonAuthenticated ) {
    next({name: 'MainPage'});

  } else {
    next();

  }
});
*/

export default router;