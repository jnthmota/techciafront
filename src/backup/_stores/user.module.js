import { userApi, validation } from '../services/index';
import router from '@/configs/router';
import Vue from 'vue'
export const user = {
    strict: true,
    state: {
        user: {
            name: "",
            email: "",
            address: {
                street: "",
                number: "",
                city: "",
                state: "",
                postalCode: ""
            },
            phone: "",
            document: ""
        }
    },
    mutations: {
        UPDATE_USER(state, payload) {
            state.user = Object.assign(state.user, payload);
        }
    },
    actions: {
        getUser(context) {
            userApi.get(`/users/me/`).then(response => {
                context.commit("UPDATE_USER", response.data);
                context.commit("UPDATE_CURRICULUM", response.data.curriculum);
                context.commit('UPDATE_LOGIN', true);
            })
        },
        updateUser(context, payload) {
            let submitted = validation.user(payload);

            if (submitted) {
                userApi.put(`/users`, payload).then(response => {
                    Vue.notify({
                        group: "foo",
                        type: "success",
                        title: "Dados Atualizados",
                        text: "",
                        duration: 3000
                    });
                    router.push("experience")

                });
            }
        }
    }
}
