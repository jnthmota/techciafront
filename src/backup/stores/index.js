import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth/auth.module'
import {user} from './user/user.module'
import {curriculum} from './curriculum/curriculum.module'
import {vacancy} from './vacancy/vacancy.module'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        user,
        curriculum,
        vacancy
    }
});