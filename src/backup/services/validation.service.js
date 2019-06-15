import Vue from 'vue'
export const validation = {
    loginUser(payload) {
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
            Vue.notify({
                group: "foo",
                type: "error",
                title: "Realizar Login",
                text: message,
                duration: 3000
            });
        }

        return submitted;
    },
    SingUp(payload) {
        const errors = [];
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
        if (!payload.name) {
            errors.push("O nome é obrigatório.");
            submitted = false;
        }
        if (!payload.document) {
            errors.push("O documento é obrigatório.");
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
                title: "Cadastro",
                text: message,
                duration: 3000
            });
        }
        return submitted;
    },
    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    user(payload) {
        const errors = [];
        let submitted = true;
        if (!payload.email) {
            errors.push("O email é obrigatória.");
            submitted = false;
        } else if (!this.validEmail(payload.email)) {
            errors.push("Utilize um email válido.");
        }

        if (!payload.name) {
            errors.push("O nome é obrigatório.");
            submitted = false;
        }
        if (!payload.document) {
            errors.push("O documento é obrigatório.");
            submitted = false;
        }
        if (!payload.phone) {
            errors.push("O telefone é obrigatório.");
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
                title: "Atualizar Dados",
                text: message,
                duration: 3000
            });
        }
        return submitted;
    }
}
