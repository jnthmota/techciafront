import {notification} from '../notification';

export const validation = {
    login(payload) {
        let errors = [];
        let submitted = true;
        if (!payload.email) {
            errors.push("O email é obrigatória.");
            submitted = false;
        } else if (!this.validEmail(payload.email)) {
            errors.push("Utilize um email válido.");
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
            notification.error("Autentificação", message);
        }
        return submitted;
    },
    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
}