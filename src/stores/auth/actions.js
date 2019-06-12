import {validation} from './validation';
import {authApi} from '@/services/index'
export const actions = {
    login(context, payload){
        let submitted = validation.login(payload);
        authApi.login(payload).then(res => {
            console.log(res);
        })
    }
}