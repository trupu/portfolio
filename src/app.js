import './scss/app.scss';
import App from './App.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});