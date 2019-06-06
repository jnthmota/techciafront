// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './polyfill'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
// import { store } from './_store';
import router from './router/index'
import Notifications from 'vue-notification'
import store from "./stores/index";

Vue.use(BootstrapVue)
Vue.use(Notifications)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {
    App
  }
})
