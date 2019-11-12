import Vue from 'vue';
import App from './App.vue';
import './load-cordova';
import router from './router';
import store from './store';
import VueOidcPlugin from '@/oidc-helper';


Vue.config.productionTip = false;
Vue.use(VueOidcPlugin, {
  client_id: '434054152947-kv5ib8an9qrgdkea62vulohmr1tuqdgm.apps.googleusercontent.com',
  authority: 'https://accounts.google.com',
  redirect_uri: 'http://localhost:8080/',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
