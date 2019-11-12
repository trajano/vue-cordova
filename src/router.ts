import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { userManager, isOidcCallback } from '@/oidc-helper';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: async (to, from, next) => {
        if (isOidcCallback(window.location.href)) {
          // it would be nice to have some animation here
          await userManager.signinRedirectCallback(window.location.href);
        }
        next();
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
