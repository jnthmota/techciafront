export const mutations = {
    setUser(state, payload) {
        state.user = Object.assign(state.user, payload);
    },
}