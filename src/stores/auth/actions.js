import { validation } from './validation';
import { authApi } from '@/services/index';
import router from '@/configs/router.js'
export const actions = {
    async login(context, payload) {
        let submitted = validation.login(payload);

        if (submitted) {
            try {
                const response = await authApi.login(payload);
                context.commit('setIsLogin', true);
                window.localStorage.token = await `Bearer ${response.data.token}`;
                if (response.data.user.role === "candidate") {
                    context.commit('setTypeUser', "candidate");
                    router.push("/candidate");
                }
                else {
                    context.commit('setTypeUser', "company");
                    router.push("/teste");
                }
                return response;
            } catch (error) {
                console.log(error);
            }
        }
    },

    async registerCandidate(context, payload) {
        payload.document = payload.document.replace(/[^\d]+/g, "");
        payload.phone = payload.phone.replace(/[^\d]+/g, "");
        let submitted = validation.registerCandidate(payload);
        if (submitted) {
            try {
                const response = await authApi.singUpCandidate(payload);
                context.commit('setIsLogin', true);
                context.commit('setTypeUser', "candidate");
                window.localStorage.token = await `Bearer ${response.data.token}`;

                router.push("/candidate");
            } catch (error) {
                console.log(error);
            }
        }

    },

    logout(context) {
        context.commit('setIsLogin', false);
        context.commit('setTypeUser', "");
        window.localStorage.clear();
        router.push("/");
    }
}