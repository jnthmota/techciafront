import { validation } from './validation';
import { authApi } from '@/services/index';
import router  from '@/configs/router.js'
export const actions = {
    async login(context, payload) {
        let submitted = validation.login(payload);
        try {
            const response = await authApi.login(payload);
            context.commit('setIsLogin', true);
            window.localStorage.token = `Bearer ${response.data.token}`;
            if (response.data.user.role === "candidate")
                router.push("/candidate");
            else
                router.push("/company");
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}