import './scss/app.scss';
import App from './App.vue';
import particles from './js/particles/particles';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './js/config/routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
