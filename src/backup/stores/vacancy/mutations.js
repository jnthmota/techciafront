export const mutations = {
    setVacancys(state, payload) {
        state.vacancys = Object.assign(state.vacancys, payload);
    },
    setVacancyCandidates(state, payload) {
        state.vacancyCandidates = Object.assign(state.vacancyCandidates, payload);
    },
    setVacancyCreate(state, payload) {
        state.vacancyCreate = Object.assign(state.vacancyCreate, payload);
    },
}