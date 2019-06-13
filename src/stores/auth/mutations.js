export const mutations = {
    setIsLogin(state, payload) {
        state.isLogin = payload;
    },
    setTypeUser(state, payload) {
        state.typeUser = payload;
    },
    setLogin(state, payload) {
        state.login = Object.assign(state.login, payload);
    },
    setRegisterCandidate(state, payload) {
        state.registerCandidate = Object.assign(state.registerCandidate, payload);
    },
    setRegisterHunter(state, payload) {
        state.registerHunter = Object.assign(state.registerHunter, payload);
    }
}