import { userService } from '../services/users.service'
import { router } from '../configs/router';

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
            router.push('/candidate');
          },
          error => {
            commit('loginFailure', error);
            dispatch('alert/error', error, { root: true });
          }
        );
    },
    signupCandidate({ dispatch, commit }, payload) {
      commit('signUpRequest', { payload }),

        userService.signupCandidate(payload)
          .then(
            user => {
              commit('signUpSuccess', user);
              router.push('/');
            },
            error => {
              commit('signUpFailure', error);
              dispatch('alert/error', error, { root: true })
            }
          )
    },
    signupCompany({ dispatch, commit }, payload) {
      commit('signUpRequest', { payload }),

        userService.signupCompany(payload)
          .then(
            user => {
              commit('signUpSuccess', user);
              router.push('/');
            },
            error => {
              commit('signUpFailure', error);
              dispatch('alert/error', error, { root: true })
            }
          )
    },
    logout({ commit }) {
      userService.logout();
      commit('logout');
    }
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
    signUpSuccess(state, user) {
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
    signUpRequest(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    signUpFailure(state) {
      state.status = {};
      state.user = null;
    }
  }
}
