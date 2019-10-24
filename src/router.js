import Vue from 'vue';
import Router from 'vue-router';
import AppSignIn from '@/views/AppSignIn.vue';
import AppAuth from '@/views/AppAuth.vue';
import AppHome from '@/views/AppHome.vue';
import AppFileExplorer from '@/views/AppFileExplorer.vue';
import AppNotFound from '@/views/AppNotFound.vue';
import AuthToken from '@/utils/AuthToken'

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
  if (AuthToken.get()) {
    next();
    return;
  }
  next('/login');
}

const ifNotAuthenticated = (to, from, next) => {
  if (!AuthToken.get()) {
    next();
    return;
  }
  next('/disk/');
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/disk',
    },
    {
      path: '/login',
      name: 'AppSignIn',
      component: AppSignIn,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AppAuth,
    },
    {
      path: '/disk',
      name: 'Disk',
      component: AppHome,
      children: [
        {
          path: '/*',
          name: 'Directories',
          component: AppFileExplorer,
        }
      ],
      meta: { diskDirectory: true },
      beforeEnter: ifAuthenticated,
    },
    {
      path: '*',
      component: AppNotFound,
    }
  ],
});
