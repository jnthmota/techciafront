import { curriculumApi } from '@/services';
import router from '@/configs/router.js'
export const actions = {
    async updateCurriculum(context, payload) {
        try {
            await payload.education.forEach(elemento => delete elemento._id);
            await payload.professionalExperience.forEach(elemento => delete elemento._id);
            await payload.languages.forEach(elemento => delete elemento._id);
            await payload.programmingLanguages.forEach(elemento => delete elemento._id);
            await payload.citiesForWork.forEach(elemento => delete elemento._id);
            await payload.socialProfiles.forEach(elemento => delete elemento._id);
            const response = await curriculumApi.put(payload);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}