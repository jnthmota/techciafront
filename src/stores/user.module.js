import { userApi } from '../services/index'
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
            dateBirth: "",
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
            userApi.get(`/user/me/`).then(response => {
                context.commit("UPDATE_USER", response.data.user);
                context.commit('UPDATE_LOGIN', true);
            })
        },
    }
}
