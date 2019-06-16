import './polyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { router } from './configs/router'
import Notifications from 'vue-notification'
// import store from "./stores/index";
import Vuelidate from 'vuelidate'
import filter from '@/configs/filters'
import { store } from './store'

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(Vuelidate)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {
    App
  }
})
