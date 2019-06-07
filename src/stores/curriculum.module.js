import { curriculumsApi, validation } from '../services/index';
import router from '../router/index';
import Vue from 'vue'
export const curriculum = {
    strict: true,
    state: {
        curriculum: {
            level: "",
            education: [
                {
                    institution: "",
                    degreeSchooling: "",
                    course: "",
                    city: "",
                    state: "",
                    initialDate: "",
                    finalDate: ""
                }
            ],
            professionalExperience: [{
                initialDate: "",
                finalDate: "",
                city: "",
                state: "",
                company: "",
                position: "",
                description: ""
            }],
            languages: [
                {
                    language: "",
                    writtenLevel: "Básico",
                    readingLevel: "Básico",
                    conversationLevel: "Básico"
                }
            ],
            interestCareer: "",
            socialProfiles: [
                {
                    "name": "github",
                    "url": ""
                }
            ],
            salaryPretension: 0,
            offerType: [
                ""
            ],
            workType: [
                ""
            ],
            citiesForWork: [
                {
                    city: "",
                    state: ""
                }
            ],
            skills: [
                ""
            ],
            certificates: [
                ""
            ],
            programmingLanguages: [
                {
                    name: "",
                    yearExperience: 0
                }
            ]
        }
    },
    mutations: {
        UPDATE_CURRICULUM(state, payload) {
            state.curriculum = Object.assign(state.curriculum, payload);
        }
    },
    actions: {
        updateCurriculum(context, payload) {
            let submitted = true;

            if (submitted) {
                curriculumsApi.put(`/curriculums`, payload).then(response => {
                    Vue.notify({
                        group: "foo",
                        type: "success",
                        title: "Dados Atualizados",
                        text: "",
                        duration: 3000
                    });
                });
            }
        }
    }
}
