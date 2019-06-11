import { authApi, validation } from '../services/index';
import router from '../router/index';
export const auth = {
    strict: true,
    state: {
        login: false,
        register: {
            name: "",
            email: "",
            password: "",
            document: "",
            phone: "",
            dateBirth: "2019-06-07T14:40:35.245Z",
        },
        registerHunter: {
            name: "",
            email: "",
            password: "",
            document: ""
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
        },
        UPDATE_REGISTERHUNTER(state, payload) {
            state.registerHunter = Object.assign(state.registerHunter, payload);
        }
    },
    actions: {
        loginUser(context, payload) {
            let submitted = validation.loginUser(payload);
            if (submitted) {
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
            let submitted = validation.SingUp(payload);
            if (submitted) {
                authApi.singUpCandidate('/auth/signup/candidate', payload).then(response => {
                    window.localStorage.token = `Bearer ${response.data.token}`;
                    context.commit("UPDATE_USER", response.data.user);
                    context.commit('UPDATE_LOGIN', true);
                    router.push('/candidates');
                })
            }
        },
        singUpHunter(context, payload) {
            let submitted = validation.SingUp(payload);
            if (submitted) {
                authApi.singUpCandidate('/auth/signup/company', payload).then(response => {
                    window.localStorage.token = `Bearer ${response.data.token}`;
                    context.commit("UPDATE_USER", response.data.user);
                    context.commit('UPDATE_LOGIN', true);
                    router.push('/company');
                })
            }
        },
        logout(context){
            window.localStorage.clear();
            context.commit("UPDATE_USER", null);
            context.commit('UPDATE_LOGIN', false);
            router.push("/");
        }
    }
}
