import { vacancyApi } from '@/services';
import router from '@/configs/router.js'
export const actions = {
    getVacancy(context) {
        vacancyApi.get().then(response => {
            context.commit("setVacancys", response.data.vacancy);
        })
    },
    vacancyCadidate(context, payload) {
        vacancyApi.getCandidate(`/vacancys/${payload}/candidates`).then(response => {
            context.commit("setVacancyCandidates", response.data);
        })
    },
    associateCandidate(context, payload) {
        vacancyApi.associateCandidate(`/vacancys/select-candidate`, payload).then(res => {
            Vue.notify({
                group: "foo",
                type: "success",
                title: "Candidato Associado",
                text: "",
                duration: 3000
            });
        });
    },
    createVacancy(context, payload) {
        vacancyApi.post(`/vacancys`, payload).then(response => {
            Vue.notify({
                group: "foo",
                type: "success",
                title: "Cadastro",
                text: "Cadastro Criado",
                duration: 3000
            });
        })
    },
    updateVacancy() {
        vacancyApi.put(`/vacancys`, payload).then(response => {
            Vue.notify({
                group: "foo",
                type: "success",
                title: "Cadastro",
                text: "Dados Atualizados",
                duration: 3000
            });
        })
    }

}