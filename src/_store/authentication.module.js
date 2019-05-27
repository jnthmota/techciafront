import { userService } from '../_services';
import  router  from '../router/index';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { email, password }) {
            commit('loginRequest', { email });

            userService.login(email, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/candidates');
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        },
        register({ dispatch, commit }, user) {
            commit('registerRequest', user);

            userService.register(user)
                .then(
                    user => {
                        commit('registerSuccess', user);
                        router.push('/candidates');
                    },
                    error => {
                        commit('registerFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        },
        registerRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        register(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        register(state) {
            state.status = {};
            state.user = null;
        },
    }
}
