import './polyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './configs/router'
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
