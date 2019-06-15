export const mutations = {
    setUser(state, payload) {
        state.user = Object.assign(state.user, payload);
    },
    setAddress(state, payload){
        state.address = Object.assign(state.address, payload);
    }
}