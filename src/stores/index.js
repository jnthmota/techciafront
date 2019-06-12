import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< HEAD
import {auth} from './auth/auth.module'
=======
import { auth } from './auth.module';
import { user } from './user.module';
import { curriculum } from './curriculum.module';
import { vacancy } from './vacancy.modules';

>>>>>>> 7f088b8c05ad841bfa78cdcbb3b649fd012dbab2
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
<<<<<<< HEAD
=======
        user,
        curriculum,
        vacancy
>>>>>>> 7f088b8c05ad841bfa78cdcbb3b649fd012dbab2
    }
});