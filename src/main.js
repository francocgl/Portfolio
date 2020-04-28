import Vue from 'vue';

import App from './App.vue';

import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from '@/router';

import '@/styles/main.scss';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
 
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')

