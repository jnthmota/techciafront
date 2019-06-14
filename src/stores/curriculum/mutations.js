export const mutations = {
    setCurriculum(state, payload) {
        state.curriculum = Object.assign(state.curriculum, payload);
    }
}