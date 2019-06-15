import { userApi } from '@/services';
import router from '@/configs/router.js'
export const actions = {
    async getUser(context) {
        try {
            const response = await userApi.get();
            await context.commit('setUser', response.data);
            await context.commit('setAddress', response.data.address);
            await context.commit('setCurriculum', response.data.curriculum);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async updateUser(context, payload) {
        try {
            payload.document = payload.document.replace(/[^\d]+/g, "");
            payload.phone = payload.phone.replace(/[^\d]+/g, "");
            payload.address.postalCode = payload.address.postalCode.replace(/[^\d]+/g, "");
            const response = await userApi.put(payload);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}