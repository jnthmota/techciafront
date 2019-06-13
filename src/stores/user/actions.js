import { validation } from './validation';
import { userApi } from '@/services';
import router from '@/configs/router.js'
export const actions = {
    async getUser(context) {
        try {
            const response = await userApi.get();
            await context.commit('setUser', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}