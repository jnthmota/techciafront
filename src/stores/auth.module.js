import { authApi } from '../services/index';
import  router  from '../router/index';
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
        loginUser(context, payload){
            authApi.login('/auth/signin', {
                email: payload.email,
                password: payload.password
            }).then(response => {
                window.localStorage.token =  `Bearer ${response.data.token}`;
                context.commit("UPDATE_USER", response.data.user);
                context.commit('UPDATE_LOGIN', true);
                if(response.data.user.role === "candidate")
                    router.push('/candidates');
                else
                    router.push('/company');
            });
        },
        singUpCandidate(context, payload) {
            authApi.singUpCandidate('/auth/signup/candidate', payload).then(response => {
                window.localStorage.token =  `Bearer ${response.data.token}`;
                context.commit("UPDATE_USER", response.data.user);
                context.commit('UPDATE_LOGIN', true);
            })
        }
    }
}
