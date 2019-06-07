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
                context.commit('UPDATE_LOGIN', true);
            })
        },
        updateUser(context, playload) {
            userApi.put(`/users`, playload).then(response => {
                console.log(response);
            });
        }
    }
}
