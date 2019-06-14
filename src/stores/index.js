import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth/auth.module'
import {user} from './user/user.module'
import {vacancy} from './vacancy.modules'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        user,
        vacancy
    }
});