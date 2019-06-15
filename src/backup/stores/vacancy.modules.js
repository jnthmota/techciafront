import { vacancyApi, validation } from '../services/index';
import router from '../router/index';
import Vue from 'vue';


export const vacancy = {
    strict: true,
    state: {
        vacancy: {
            _id: "",
            position: "",
            minLevel: "",
            skills: [],
            education: [],
            languages: [],
            description: "",
            maxSalary: "",
            offerType: [],
            workType: [],
            citiesForWork: []
        },

        vacancys: [],
        candidates: []
        
    },
    mutations: {
        UPDATE_VACANCY(state, payload) {
            state.vacancy = Object.assign(state.vacancy, payload);
        },
        UPDATE_VACANCYS(state, payload) {
            state.vacancys = payload;
        },
        UPDATE_VACANCYSCANDIDATES(state, payload) {
            state.candidates = payload;
        },
        PUSH_VACANCYS(state, payload) {
            state.vacancys.push(payload);
        }
    },
    actions: {
        getVacancy(context) {
            vacancyApi.get('/vacancys').then(response => {
                context.commit("UPDATE_VACANCYS", response.data.vacancy);
            })
        },
        vacancyCadidate(context, payload){
            vacancyApi.getCandidate(`/vacancys/${payload}/candidates`).then(response => {
                context.commit("UPDATE_VACANCYSCANDIDATES", response.data);
            })
        },
        associateCandidate(context, payload){
            vacancyApi.associateCandidate(`/vacancys/select-candidate`, payload).then(res => {
                Vue.notify({
                    group: "foo",
                    type: "success",
                    title: "Candidato Associado",
                    text: "",
                    duration: 3000
                });
            });
        }
    }
}