import { authApi } from '../services/index';
import router from '../router/index';
import Vue from 'vue'
export const auth = {
    strict: true,
    state: {
        login: false,
        register: {
            name: "",
            email: "",
            password: "",
            document: "46958999818"
        },
        logar: {
            email: "",
            password: "",
        }
    },
    mutations: {
        UPDATE_LOGIN(state, payload) {
            state.login = payload;
        },
        UPDATE_LOGAR(state, payload) {
            state.logar = Object.assign(state.logar, payload);
        },
        UPDATE_REGISTER(state, payload) {
            state.register = Object.assign(state.register, payload);
        }
    },
    actions: {
        loginUser(context, payload) {
            const errors = [];
            let submitted = true;
            if (!payload.email) {
                errors.push("O email é obrigatória.");
                submitted = false;
            }

            if (!payload.password) {
                errors.push("A senha é obrigatória.");
                submitted = false;
            }

            if (!submitted) {
                let message = "";
                for (let error in errors) {
                    message += errors[error] + "<br/>";
                }
                Vue.notify({
                    group: "foo",
                    type: "error",
                    title: "Realizar Login",
                    text: message,
                    duration: 3000
                });
            } else {
                authApi.login('/auth/signin', {
                    email: payload.email,
                    password: payload.password
                }).then(response => {
                    window.localStorage.token = `Bearer ${response.data.token}`;
                    context.commit("UPDATE_USER", response.data.user);
                    context.commit('UPDATE_LOGIN', true);
                    if (response.data.user.role === "candidate")
                        router.push('/candidates');
                    else
                        router.push('/company');
                });
            }
        },
        singUpCandidate(context, payload) {
            authApi.singUpCandidate('/auth/signup/candidate', payload).then(response => {
                window.localStorage.token = `Bearer ${response.data.token}`;
                context.commit("UPDATE_USER", response.data.user);
                context.commit('UPDATE_LOGIN', true);
            })
        }
    }
}
