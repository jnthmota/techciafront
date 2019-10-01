import './polyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { router } from './configs/router'
// import  router  from './configs/routerTemp'
import Notifications from 'vue-notification'
// import store from "./stores/index";
import Vuelidate from 'vuelidate'
import filter from '@/configs/filters'
import { store } from './store'
//global registration
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VueFormWizard)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {
    App
  }
})
