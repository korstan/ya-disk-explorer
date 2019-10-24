import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import TokenInterceptor from '@/utils/TokenInterceptor';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
TokenInterceptor();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
