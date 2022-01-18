import Vue from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router';
import store from '@/store';
import global_mixin from '@/mixins';
import CSSPlugin from 'gsap/CSSPlugin';

//styles
import '@/styles/main.scss';
//bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.mixin(global_mixin); 

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(CSSPlugin);
 
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

