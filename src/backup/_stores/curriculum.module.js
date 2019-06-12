import { curriculumsApi, validation } from '../services/index';
import router from '@/configs/router';
import Vue from 'vue';
import {
    education, professionalExperience, languages, socialProfiles,
    citiesForWork, programmingLanguages
} from './curriculums.model'


export const curriculum = {
    strict: true,

    state: {
        curriculum: {
            level: "",
            education: [],
            professionalExperience: [],
            languages: [],
            interestCareer: "",
            socialProfiles: [],
            salaryPretension: 0,
            offerType: [
                ""
            ],
            workType: [
                ""
            ],
            citiesForWork: [],
            skills: [],
            certificates: [],
            programmingLanguages: []
        }
    },
    mutations: {
        UPDATE_CURRICULUM(state, payload) {
            state.curriculum = Object.assign(state.curriculum, payload);
        }
    },
    actions: {
        async updateCurriculum(context, payload) {
            let submitted = true;
            await payload.education.forEach(elemento => delete elemento._id);
            await payload.professionalExperience.forEach(elemento => delete elemento._id);
            await payload.languages.forEach(elemento => delete elemento._id);
            await payload.programmingLanguages.forEach(elemento => delete elemento._id);
            await payload.citiesForWork.forEach(elemento => delete elemento._id);
            await payload.socialProfiles.forEach(elemento => delete elemento._id);

            if (submitted) {
                console.log(payload.education);
                await curriculumsApi.put(`/curriculums`, payload).then(response => {
                    Vue.notify({
                        group: "foo",
                        type: "success",
                        title: "Dados Atualizados",
                        text: "",
                        duration: 3000
                    });
                });
            }
        },
        pushProfessionalExperience(context, payload) {
            payload.professionalExperience.push(professionalExperience);
            context.commit("UPDATE_CURRICULUM", payload);
        },
        pushSchooling(context, payload) {
            payload.education.push(education);
            context.commit("UPDATE_CURRICULUM", payload);
        },
        pushProgrammingLanguages(context, payload) {
            payload.programmingLanguages.push(programmingLanguages);
            context.commit("UPDATE_CURRICULUM", payload);
        },
        pushLanguage(context, payload) {
            payload.languages.push(languages);
            context.commit("UPDATE_CURRICULUM", payload);
        }
    }
}
